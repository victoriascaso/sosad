/*
|--------------------------------------------------------------------------
| INITIALIZATION
|--------------------------------------------------------------------------
*/

// Bot
var args = process.argv.slice(2);
var defaultBot = 'sosad';
var bot = (args && typeof args[0] !== "undefined") ? args[0] : defaultBot;

// Path and ENV
var path = require('path');
global.appRoot = path.resolve(__dirname);
require('dotenv').config();
global.urlBase = process.env.URL_BASE;
global.phantomJsBin = process.env.PHANTOMJS;
global.botName = bot;
global.botConfig = require("./config/" + bot + ".json");

// Initialize express
var express = require('express'),
	app = express();

var port = process.env.PORT || global.botConfig.port;

var io = require('socket.io').listen(app.listen(port));
require('./config')(app, io);
require('./routes')(app, io);

// Libs
var database = require("./app/lib/database.js");
var twitter = require("./app/lib/twitter.js");
var track = require("./app/lib/track.js");
var twitterStream = require("./app/lib/twitterStream.js")(twitter);

// Data
var ignoreLocations = global.botConfig.ignore_locations;
var ignoreAccounts = global.botConfig.ignore_accounts;
var ignoreForeignExpressions = global.botConfig.ignore_foreign_expressions;
var ignoreUserDescriptions = global.botConfig.ignore_user_descriptions;

// Models
var Tweet = require("./app/models/Tweet.js");
var Historic = require("./app/models/Historic.js");

// Logging
console.log('So Sad is running on http://localhost:' + port);

// Vars
var numberTweets, mostHatedUser, mostHatedUsersLastTweet, mostHatefulUser, mostHatefulUserTweet, mostHatefulUserTweetId;

// Twitter Stream
twitterStream.on('tweet', function (tweet) {

	try {
		var tweetText = Tweet.getText(tweet);

		// FILTER: If it's not a hate tweet, we ignore it
		var information = Tweet.extractInformationFromTweet(tweet, track);
		if (!Tweet.isItAHateTweetFromInformation(information)) return;
		if (!Tweet.isValidLocation(tweet, ignoreLocations, ignoreAccounts, ignoreForeignExpressions, ignoreUserDescriptions)) return;

		var isRetweet = Tweet.isItARetweet(tweet);

		// Dispatcher: Is it a retweet?
		if (isRetweet) {
			//database.saveRetweet(tweet);
			//if (global.botConfig.saveTweets) database.saveRetweetStore(tweet);
		} else {

			// Or it is a tweet
			tweet.information = information;
			//database.saveTweet(tweet);
			//if (global.botConfig.saveTweets) database.saveTweetStore(tweet);

			// Is it a tweet to be shown?

			var tweetParsed = {};
			tweetParsed.id_str = tweet.id_str;
			tweetParsed.tweet = tweetText;
			var words = information.words.map(function (value, index) {
				return value.word;
			});
			tweetParsed.words = words;
			tweetParsed.screen_name = tweet.user.screen_name;

			//io.sockets.emit('tweet', tweetParsed);
		}

		//var consoleLogMessage = isRetweet ? 'Retweet' : 'Tweet: ' + words;
		var consoleLogMessage = isRetweet ? 'Retweet' : 'Tweet: ' + tweetText + '\n';
		console.log(consoleLogMessage);

		// Save the users
		//var users = Tweet.getUsernamesInTweet(tweetText);
		//database.saveUsers(users);

		if (Tweet.isTweetForMostHatedUser(tweet, mostHatedUser)) {
			mostHatedUsersLastTweet = tweetText;
		}

	} catch (err) {
		console.log(err);
	}

});
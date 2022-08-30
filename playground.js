/*
|--------------------------------------------------------------------------
| INITIALIZATION
|--------------------------------------------------------------------------
*/
// Path and ENV
var path = require('path');
global.appRoot = path.resolve(__dirname);
require('dotenv').config();

var bot = 'sosad';
global.botConfig = require("./config/" + bot + ".json");

// Libs
var dbConfig = require(global.appRoot + '/config/database_' + bot + '.json');
var mysql = require('mysql2');
const { exit } = require('process');

var database = {
	connection: mysql.createConnection({
		host: dbConfig.host,
		user: dbConfig.user,
		password: dbConfig.password,
		database: dbConfig.database
	})
};

database.initialize = function () {

	this.connection.connect();
};

var query = "INSERT INTO `tweets` (`id`, `tweet`, `id_str`, `screen_name`, `json`, `published`) VALUES (NULL, 'Something 3', '123123', 'ojoven', '{ } ', '2022 - 08 - 29 19: 31: 18');";
console.log('Save tweet');

database.connection.query(query, function (error, results, fields) {
	if (error) {
		console.log(error);
		throw error;
	}
});
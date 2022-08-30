var assert = require('chai').assert;
var expect = require('chai').expect;

describe('is a tweet', function () {

	var Tweet = require("../app/models/Tweet.js");

	var path = require('path');
	global.appRoot = path.resolve(__dirname + '/../');
	global.lang = 'es';

	var retweetWithEmbedded = JSON.parse('{"created_at":"Fri May 29 18:00:25 +0000 2020","id":1266429201315438600,"id_str":"1266429201315438595","text":"RT @Panik81: ¿Veis todo lo que ha soltado por su boquita? Pues seguro que Ana Pastor se escandaliza más si llega a decir cierra al salir.","source":"<a href=\'http://twitter.com/download/android\' rel=\'nofollow\'>Twitter for Android</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":515397402,"id_str":"515397402","name":"Touche pas a mon pote","screen_name":"melgacullar","location":null,"url":null,"description":"Jubilado y feliz","translator_type":"none","protected":false,"verified":false,"followers_count":217,"friends_count":194,"listed_count":3,"favourites_count":8008,"statuses_count":19986,"created_at":"Mon Mar 05 12:00:29 +0000 2012","utc_offset":null,"time_zone":null,"geo_enabled":false,"lang":null,"contributors_enabled":false,"is_translator":false,"profile_background_color":"C0DEED","profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png","profile_background_tile":false,"profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"profile_image_url":"http://pbs.twimg.com/profile_images/1220494999072202753/zu2wkc_L_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/1220494999072202753/zu2wkc_L_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/515397402/1571736740","default_profile":true,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Fri May 29 16:54:50 +0000 2020","id":1266412698092404700,"id_str":"1266412698092404736","text":"¿Veis todo lo que ha soltado por su boquita? Pues seguro que Ana Pastor se escandaliza más si llega a decir cierra… https://t.co/ESW0HMfr1d","source":"<a href=\'http://twitter.com/download/android\' rel=\'nofollow\'>Twitter for Android</a>","truncated":true,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":452985859,"id_str":"452985859","name":"Panik","screen_name":"Panik81","location":null,"url":null,"description":"cansado de medios de información manipulados y derechas camufladas.","translator_type":"none","protected":false,"verified":false,"followers_count":25753,"friends_count":1753,"listed_count":109,"favourites_count":156849,"statuses_count":74540,"created_at":"Mon Jan 02 13:13:18 +0000 2012","utc_offset":null,"time_zone":null,"geo_enabled":false,"lang":null,"contributors_enabled":false,"is_translator":false,"profile_background_color":"C0DEED","profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png","profile_background_tile":false,"profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"profile_image_url":"http://pbs.twimg.com/profile_images/765530824049655808/6PS-97m7_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/765530824049655808/6PS-97m7_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/452985859/1507376281","default_profile":true,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"quoted_status_id":1266397757935440000,"quoted_status_id_str":"1266397757935439875","quoted_status":{"created_at":"Fri May 29 15:55:28 +0000 2020","id":1266397757935440000,"id_str":"1266397757935439875","text":"\'Majadero psicópata\' a Fernando Simón, \'comunista de mierda\' a Iglesias, \'astronauta lunático\' a Pedro Duque, \'hija… https://t.co/mQVg7wxDRy","display_text_range":[0,140],"source":"<a href=\'https://about.twitter.com/products/tweetdeck\' rel=\'nofollow\'>TweetDeck</a>","truncated":true,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":535707261,"id_str":"535707261","name":"eldiario.es","screen_name":"eldiarioes","location":null,"url":"http://www.eldiario.es","description":"Periodismo a pesar de todo. Colabora: Hazte socio -- http://www.eldiario.es/socios/alta.html","translator_type":"none","protected":false,"verified":true,"followers_count":1168071,"friends_count":479,"listed_count":11829,"favourites_count":197,"statuses_count":253001,"created_at":"Sat Mar 24 19:08:26 +0000 2012","utc_offset":null,"time_zone":null,"geo_enabled":false,"lang":null,"contributors_enabled":false,"is_translator":false,"profile_background_color":"196CAE","profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png","profile_background_tile":false,"profile_link_color":"0084B4","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":false,"profile_image_url":"http://pbs.twimg.com/profile_images/1148124170116653056/_JHLqs3Z_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/1148124170116653056/_JHLqs3Z_normal.png","profile_banner_url":"https://pbs.twimg.com/profile_banners/535707261/1562868173","default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"extended_tweet":{"full_text":"\'Majadero psicópata\' a Fernando Simón, \'comunista de mierda\' a Iglesias, \'astronauta lunático\' a Pedro Duque, \'hija de puta\' a María Jesús Montero, \'pa cagarse en su puta madre\' a Marlaska... Son palabras del jefe de policía local de El Puerto (Cádiz) https://t.co/qBUZpsMFCc https://t.co/mqWUxANl5n","display_text_range":[0,275],"entities":{"hashtags":[],"urls":[{"url":"https://t.co/qBUZpsMFCc","expanded_url":"https://www.eldiario.es/andalucia/cadiz/Ayuntamiento-Puerto-disculpas-Policia-Trileros_0_1032397552.html","display_url":"eldiario.es/andalucia/cadi…","indices":[252,275]}],"user_mentions":[],"symbols":[],"media":[{"id":1266397532357308400,"id_str":"1266397532357308421","indices":[276,299],"media_url":"http://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","media_url_https":"https://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","url":"https://t.co/mqWUxANl5n","display_url":"pic.twitter.com/mqWUxANl5n","expanded_url":"https://twitter.com/eldiarioes/status/1266397757935439875/photo/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":643,"h":362,"resize":"fit"},"large":{"w":643,"h":362,"resize":"fit"},"medium":{"w":643,"h":362,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":1266397532357308400,"id_str":"1266397532357308421","indices":[276,299],"media_url":"http://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","media_url_https":"https://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","url":"https://t.co/mqWUxANl5n","display_url":"pic.twitter.com/mqWUxANl5n","expanded_url":"https://twitter.com/eldiarioes/status/1266397757935439875/photo/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":643,"h":362,"resize":"fit"},"large":{"w":643,"h":362,"resize":"fit"},"medium":{"w":643,"h":362,"resize":"fit"}}}]}},"quote_count":357,"reply_count":643,"retweet_count":1686,"favorite_count":1544,"entities":{"hashtags":[],"urls":[{"url":"https://t.co/mQVg7wxDRy","expanded_url":"https://twitter.com/i/web/status/1266397757935439875","display_url":"twitter.com/i/web/status/1…","indices":[117,140]}],"user_mentions":[],"symbols":[]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"filter_level":"low","lang":"es"},"quoted_status_permalink":{"url":"https://t.co/Az2XUZKLYB","expanded":"https://twitter.com/eldiarioes/status/1266397757935439875","display":"twitter.com/eldiarioes/sta…"},"is_quote_status":true,"extended_tweet":{"full_text":"¿Veis todo lo que ha soltado por su boquita? Pues seguro que Ana Pastor se escandaliza más si llega a decir cierra al salir.","display_text_range":[0,124],"entities":{"hashtags":[],"urls":[],"user_mentions":[],"symbols":[]}},"quote_count":6,"reply_count":10,"retweet_count":193,"favorite_count":350,"entities":{"hashtags":[],"urls":[{"url":"https://t.co/ESW0HMfr1d","expanded_url":"https://twitter.com/i/web/status/1266412698092404736","display_url":"twitter.com/i/web/status/1…","indices":[116,139]}],"user_mentions":[],"symbols":[]},"favorited":false,"retweeted":false,"filter_level":"low","lang":"es"},"quoted_status_id":1266397757935440000,"quoted_status_id_str":"1266397757935439875","quoted_status":{"created_at":"Fri May 29 15:55:28 +0000 2020","id":1266397757935440000,"id_str":"1266397757935439875","text":"\'Majadero psicópata\' a Fernando Simón, \'comunista de mierda\' a Iglesias, \'astronauta lunático\' a Pedro Duque, \'hija… https://t.co/mQVg7wxDRy","display_text_range":[0,140],"source":"<a href=\'https://about.twitter.com/products/tweetdeck\' rel=\'nofollow\'>TweetDeck</a>","truncated":true,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":535707261,"id_str":"535707261","name":"eldiario.es","screen_name":"eldiarioes","location":null,"url":"http://www.eldiario.es","description":"Periodismo a pesar de todo. Colabora: Hazte socio -- http://www.eldiario.es/socios/alta.html","translator_type":"none","protected":false,"verified":true,"followers_count":1168071,"friends_count":479,"listed_count":11829,"favourites_count":197,"statuses_count":253001,"created_at":"Sat Mar 24 19:08:26 +0000 2012","utc_offset":null,"time_zone":null,"geo_enabled":false,"lang":null,"contributors_enabled":false,"is_translator":false,"profile_background_color":"196CAE","profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png","profile_background_tile":false,"profile_link_color":"0084B4","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":false,"profile_image_url":"http://pbs.twimg.com/profile_images/1148124170116653056/_JHLqs3Z_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/1148124170116653056/_JHLqs3Z_normal.png","profile_banner_url":"https://pbs.twimg.com/profile_banners/535707261/1562868173","default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"extended_tweet":{"full_text":"\'Majadero psicópata\' a Fernando Simón, \'comunista de mierda\' a Iglesias, \'astronauta lunático\' a Pedro Duque, \'hija de puta\' a María Jesús Montero, \'pa cagarse en su puta madre\' a Marlaska... Son palabras del jefe de policía local de El Puerto (Cádiz) https://t.co/qBUZpsMFCc https://t.co/mqWUxANl5n","display_text_range":[0,275],"entities":{"hashtags":[],"urls":[{"url":"https://t.co/qBUZpsMFCc","expanded_url":"https://www.eldiario.es/andalucia/cadiz/Ayuntamiento-Puerto-disculpas-Policia-Trileros_0_1032397552.html","display_url":"eldiario.es/andalucia/cadi…","indices":[252,275]}],"user_mentions":[],"symbols":[],"media":[{"id":1266397532357308400,"id_str":"1266397532357308421","indices":[276,299],"media_url":"http://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","media_url_https":"https://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","url":"https://t.co/mqWUxANl5n","display_url":"pic.twitter.com/mqWUxANl5n","expanded_url":"https://twitter.com/eldiarioes/status/1266397757935439875/photo/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":643,"h":362,"resize":"fit"},"large":{"w":643,"h":362,"resize":"fit"},"medium":{"w":643,"h":362,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":1266397532357308400,"id_str":"1266397532357308421","indices":[276,299],"media_url":"http://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","media_url_https":"https://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","url":"https://t.co/mqWUxANl5n","display_url":"pic.twitter.com/mqWUxANl5n","expanded_url":"https://twitter.com/eldiarioes/status/1266397757935439875/photo/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":643,"h":362,"resize":"fit"},"large":{"w":643,"h":362,"resize":"fit"},"medium":{"w":643,"h":362,"resize":"fit"}}}]}},"quote_count":357,"reply_count":643,"retweet_count":1686,"favorite_count":1544,"entities":{"hashtags":[],"urls":[{"url":"https://t.co/mQVg7wxDRy","expanded_url":"https://twitter.com/i/web/status/1266397757935439875","display_url":"twitter.com/i/web/status/1…","indices":[117,140]}],"user_mentions":[],"symbols":[]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"filter_level":"low","lang":"es"},"quoted_status_permalink":{"url":"https://t.co/Az2XUZKLYB","expanded":"https://twitter.com/eldiarioes/status/1266397757935439875","display":"twitter.com/eldiarioes/sta…"},"is_quote_status":true,"quote_count":0,"reply_count":0,"retweet_count":0,"favorite_count":0,"entities":{"hashtags":[],"urls":[],"user_mentions":[{"screen_name":"Panik81","name":"Panik","id":452985859,"id_str":"452985859","indices":[3,11]}],"symbols":[]},"favorited":false,"retweeted":false,"filter_level":"low","lang":"es","timestamp_ms":"1590775225367"}');
	var retweet = JSON.parse('{"created_at":"Fri May 29 18:00:25 +0000 2020","id":1266429200724045800,"id_str":"1266429200724045832","text":"RT @eldiarioes: \'Majadero psicópata\' a Fernando Simón, \'comunista de mierda\' a Iglesias, \'astronauta lunático\' a Pedro Duque, \'hija de puta…","source":"<a href=\'http://twitter.com/download/android\' rel=\'nofollow\'>Twitter for Android</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":1429173541,"id_str":"1429173541","name":"sopasconhondas","screen_name":"sopasconhondas","location":"en cualquier parte","url":null,"description":"...si a mí me gustan que suenen, pa qué los quiero engrasaos","translator_type":"none","protected":false,"verified":false,"followers_count":914,"friends_count":2934,"listed_count":2,"favourites_count":9448,"statuses_count":10624,"created_at":"Wed May 15 00:26:39 +0000 2013","utc_offset":null,"time_zone":null,"geo_enabled":false,"lang":null,"contributors_enabled":false,"is_translator":false,"profile_background_color":"C0DEED","profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png","profile_background_tile":false,"profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"profile_image_url":"http://pbs.twimg.com/profile_images/926366596595101696/yYkau2f9_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/926366596595101696/yYkau2f9_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/1429173541/1401074868","default_profile":true,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Fri May 29 15:55:28 +0000 2020","id":1266397757935440000,"id_str":"1266397757935439875","text":"\'Majadero psicópata\' a Fernando Simón, \'comunista de mierda\' a Iglesias, \'astronauta lunático\' a Pedro Duque, \'hija… https://t.co/mQVg7wxDRy","display_text_range":[0,140],"source":"<a href=\'https://about.twitter.com/products/tweetdeck\' rel=\'nofollow\'>TweetDeck</a>","truncated":true,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":535707261,"id_str":"535707261","name":"eldiario.es","screen_name":"eldiarioes","location":null,"url":"http://www.eldiario.es","description":"Periodismo a pesar de todo. Colabora: Hazte socio -- http://www.eldiario.es/socios/alta.html","translator_type":"none","protected":false,"verified":true,"followers_count":1168071,"friends_count":479,"listed_count":11829,"favourites_count":197,"statuses_count":253001,"created_at":"Sat Mar 24 19:08:26 +0000 2012","utc_offset":null,"time_zone":null,"geo_enabled":false,"lang":null,"contributors_enabled":false,"is_translator":false,"profile_background_color":"196CAE","profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png","profile_background_tile":false,"profile_link_color":"0084B4","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":false,"profile_image_url":"http://pbs.twimg.com/profile_images/1148124170116653056/_JHLqs3Z_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/1148124170116653056/_JHLqs3Z_normal.png","profile_banner_url":"https://pbs.twimg.com/profile_banners/535707261/1562868173","default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"extended_tweet":{"full_text":"\'Majadero psicópata\' a Fernando Simón, \'comunista de mierda\' a Iglesias, \'astronauta lunático\' a Pedro Duque, \'hija de puta\' a María Jesús Montero, \'pa cagarse en su puta madre\' a Marlaska... Son palabras del jefe de policía local de El Puerto (Cádiz) https://t.co/qBUZpsMFCc https://t.co/mqWUxANl5n","display_text_range":[0,275],"entities":{"hashtags":[],"urls":[{"url":"https://t.co/qBUZpsMFCc","expanded_url":"https://www.eldiario.es/andalucia/cadiz/Ayuntamiento-Puerto-disculpas-Policia-Trileros_0_1032397552.html","display_url":"eldiario.es/andalucia/cadi…","indices":[252,275]}],"user_mentions":[],"symbols":[],"media":[{"id":1266397532357308400,"id_str":"1266397532357308421","indices":[276,299],"media_url":"http://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","media_url_https":"https://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","url":"https://t.co/mqWUxANl5n","display_url":"pic.twitter.com/mqWUxANl5n","expanded_url":"https://twitter.com/eldiarioes/status/1266397757935439875/photo/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":643,"h":362,"resize":"fit"},"large":{"w":643,"h":362,"resize":"fit"},"medium":{"w":643,"h":362,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":1266397532357308400,"id_str":"1266397532357308421","indices":[276,299],"media_url":"http://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","media_url_https":"https://pbs.twimg.com/media/EZMl2JSWsAUe-l-.jpg","url":"https://t.co/mqWUxANl5n","display_url":"pic.twitter.com/mqWUxANl5n","expanded_url":"https://twitter.com/eldiarioes/status/1266397757935439875/photo/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":643,"h":362,"resize":"fit"},"large":{"w":643,"h":362,"resize":"fit"},"medium":{"w":643,"h":362,"resize":"fit"}}}]}},"quote_count":357,"reply_count":643,"retweet_count":1686,"favorite_count":1544,"entities":{"hashtags":[],"urls":[{"url":"https://t.co/mQVg7wxDRy","expanded_url":"https://twitter.com/i/web/status/1266397757935439875","display_url":"twitter.com/i/web/status/1…","indices":[117,140]}],"user_mentions":[],"symbols":[]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"filter_level":"low","lang":"es"},"is_quote_status":false,"quote_count":0,"reply_count":0,"retweet_count":0,"favorite_count":0,"entities":{"hashtags":[],"urls":[],"user_mentions":[{"screen_name":"eldiarioes","name":"eldiario.es","id":535707261,"id_str":"535707261","indices":[3,14]}],"symbols":[]},"favorited":false,"retweeted":false,"filter_level":"low","lang":"es","timestamp_ms":"1590775225226"}');


	it('retweet should return it is a retweet', function () {

		tweet = retweet;
		assert.equal(Tweet.isItARetweet(tweet), true);

		tweet = retweetWithEmbedded;
		assert.equal(Tweet.isItARetweet(tweet), true);

	});


});
var path = require('path');
var request = require('request');
var appConfig = require(path.join(__dirname,'..','global','appConfig'));
var newsConfig = require(path.join(__dirname,'..','global','newsConfig'));
var mongooseSave = require(path.join(__dirname, 'mongoose'))
var baseUrl = appConfig.mainUrl
var apiUrl = '&apiKey='+appConfig.apiKey
var _ = require('lodash');

exports.getNews = function(channel){

	var reqUrl = baseUrl+'source='+_.find(newsConfig,{'channelName':channel}).name+apiUrl;
	console.log(reqUrl)
	request(reqUrl,function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    	saveNews(JSON.parse(body))
		  }
	}) 

	function saveNews(newsArray){
		_.forEach(newsArray.articles,function(eachNews){
			eachNews.source = newsArray.source;
			eachNews.status = 'unprocessed'
			mongooseSave.saveNews(eachNews);
		})
	}
}

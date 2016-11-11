var path = require('path');
var mongoose = require('mongoose');
var config = require(path.join(__dirname,'..','global','appConfig'))
var db = mongoose.connect(config.mongooseUrl)
var rawData = require(path.join(__dirname,'..','models','rawNews'))

exports.saveNews = function(news){

rawData.find({'$or':
                        [
                        	{title:news.title},
                        	{description:news.description}
                        ]
             },function(err,data){
	if(data.length == 0){
		var newz = new rawData(news)
		newz.save(news,function(err,data){
			if(err){
				console.log("err",err)
			}
			else{
				console.log("saved ",data.source," at ",new Date())
			}
		})
	}
})
}
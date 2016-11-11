var path = require('path');
var channelsName = require(path.join(__dirname,'..','global','newsConfig'))
var news = require(path.join(__dirname,'..','controller','newsExtract'))
var _ = require('lodash')
var jobsArray = []

exports.getJobs = function(jobsArrayCallback){
	_.forEach(channelsName,function(channelsData,index){
		var job = {
			name : channelsData.channelName,
			description : {
				after:channelsData.time*1000*60,
			    job: function () {
			        news.getNews(channelsData.channelName);
			    },
			    spawn: true  
			}
		}
		jobsArray.push(job)
		if(channelsName.length == index+1){
			jobsArrayCallback(jobsArray)
		}
	})
}
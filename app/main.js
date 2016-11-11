var path = require('path')
var joblist = require(path.join(__dirname,'jobs','joblist'))
var _ = require('lodash')

exports.mainjob = function(req,res){
	joblist.getJobs(function(data){
		console.log("jobs started")

	    _.forEach(data,function(jobs){
	    	console.log("job started for ",jobs.name)
	    	setInterval(jobs.description.job,jobs.description.after)
	    })
	    res.send("started")
	})
}




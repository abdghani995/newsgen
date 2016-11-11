var mongoose = require('mongoose');

var rawNews = mongoose.Schema({
    source: { type: String, },    
    author: { type: String,  },   
    title: { type: String, required: true },   
    description: { type: String, required: true },   
    source: { type: String, required: true },   
    url: { type: String, required: true },   
    urlToImage: { type: String, required: true },  
    publishedAt : {type:Date,},
    status : { type: String, required: true } 
});

var rawnews = mongoose.model('rawnews', rawNews);

module.exports = rawnews
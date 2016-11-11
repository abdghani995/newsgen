var express = require('express');
var router = express.Router();
var path = require('path');
var newsgen = require(path.join(__dirname,'..','app','main'))
/* GET home page. */
router.get('/', newsgen.mainjob);

module.exports = router;

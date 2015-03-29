var express = require('express');
var router = express.Router();
var Question = require('../models/index.js').Question;
var Answer = require('../models/index.js').Answer;

/* GET home page. */
router.get('/', function(req, res, next) {
	//create tables if necessary
	Question.sync();
	Answer.sync();
	Question.create({text: "Where do you want to travel to next?"});
	res.render('index.html');
});

module.exports = router;

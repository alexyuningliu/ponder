var express = require('express');
var router = express.Router();
var Question = require('../models/index.js').Question;
var Answer = require('../models/index.js').Answer;

/* GET home page. */
router.get('/', function(req, res, next) {
	//create tables if necessary
	// Question.create({text: "Where do you want to travel to next?"});
	Question.findAll({limit: 10}).then(function(question) {
		console.log(question[0].dataValues.text);
	});
	res.render('index.html');
});

router.get('/answer', function(req, res, next) {
	Answer.findAll({limit: 5, order: '"updatedAt" DESC'}).then(function(answers) {
		return res.json(answers);
	})
})

router.post('/answer', function(req, res, next) {
	var text = req.body.text;
	var byName = req.body.byName;
	var inCountry = req.body.inCountry;

	Answer.create({
		text: text,
		byName: byName,
		inCountry: inCountry
	});

	//send response
	res.send("Created answer!")
});

module.exports = router;

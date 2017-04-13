var express = require('express');
var router = express.Router();
var Program = require('./../models').Program;

/* GET users listing. */
router.get('/program', function(req, res, next) {
	
	var programs = Program.searchPrograms();
	programs.then(function(programs){
		res.send({code:200,result:programs});
	},function(err){
		res.send({code:200,result:err});
	})
  	
});

module.exports = router;

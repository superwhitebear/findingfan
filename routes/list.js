var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){

	if (req.session.username){
		//res.send(req.session.username);
		var db = req.db;
    	var collection = db.get('profiles');
		collection.find({},{},function(e,docs){
    		res.render('list', {docs: docs});	
    		// res.json(docs);
  		})

	}else{
		res.redirect('/');
	}
});
  

module.exports = router;

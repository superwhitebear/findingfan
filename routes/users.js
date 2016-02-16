var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  	var usrname = req.body.username;
	var	passwd = req.body.password;

	var db = req.db;

	    var db = req.db;

    if(db){
    	res.send('connect')
    }else{
    	res.send('fail')
    }

    // db.get(collection's name)
    var collection = db.get('users');

    // find({},{}, function(err,docs))
    // render('users/list', {} )
    collection.find({username:'aa'}, function(e, docs) {
        res.send('Success')
    });



});

module.exports = router;

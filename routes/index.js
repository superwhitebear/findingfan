var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

router.get('/regis',function(req, res, next) {
	res.render('register.jade',{ title: 'Register'});
	//res.send('Register Form');
});

router.post('/createaccount',function(req, res, next){

    if (req.body.username!=''&&req.body.password!=''&&req.body.password==req.body.confirmpassword){
    	var db = req.db;
		var collection = db.get('users');

	    collection.insert({username: req.body.username,passwd: req.body.password}, function(err, docs) {
	        if (err) {
	            res.send('Cannot Create Account <META http-equiv="refresh" content="1;URL=http://localhost:3000">');
	        } else {
	            // redirect to /users 
	            res.send('Account Created <META http-equiv="refresh" content="1;URL=http://localhost:3000">');
	        }
	    })
	}else {
		res.send('Data Input Error!! Please, Try again <META http-equiv="refresh" content="1;URL=http://localhost:3000/regis">');
	}
    
});

router.get ('/Add/:usrname',function(req, res, next){

	var username = req.params.usrname;

	if (req.session.username){

	var db = req.db;
	var collection = db.get('profiles');

	    collection.find({'username': username}, function(err, docs) {
	        if (docs.length==1) {
	            res.send('Added ' + username + ' to friend list <META http-equiv="refresh" content="1;URL=http://localhost:3000/list">');
	        } else {
	            // redirect to /users 
	            res.send('Error,Please Contact Admin <META http-equiv="refresh" content="1;URL=http://localhost:3000/list">');
	        }
	    })
	}else {
		res.send('You are not authenticate,please login again <META http-equiv="refresh" content="1;URL=http://localhost:3000/">');
	}

	// res.send('Added ' + req.params.usrname + ' to friend list <META http-equiv="refresh" content="1;URL=http://localhost:3000/list">');
});

router.get('/search',function(req, res, next){
	if (req.session.username){
		res.render('search');
	}else{
		res.send('You are not authenticate,please login again <META http-equiv="refresh" content="1;URL=http://localhost:3000/">');
	}
	
});

router.post('/search',function(req, res, next){
	if (req.session.username){
		var name = req.body.name;

   		var db = req.db;
    	var collection = db.get('profiles');
		collection.find({'username': name},{},function(e,docs){
    		res.render('list', {docs: docs});
  		})
	}else{
		res.send('You are not authenticate,please login again <META http-equiv="refresh" content="1;URL=http://localhost:3000/">');
	}
	
});

module.exports = router;

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

router.post('/createaccount',function(req, res, netxt){

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


module.exports = router;

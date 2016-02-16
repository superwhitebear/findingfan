var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	var usrname = req.body.username;
	var	passwd = req.body.password;
	
	if (usrname == 'admin' && passwd =='1234'){

		req.session.usrname = usrname;
		res.redirect('/list')
	}else{
		
		res.redirect('/');
	}
});

module.exports = router;

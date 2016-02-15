var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){

	if (req.session.usrname){
		//res.send(req.session.usrname);
		res.render('list', { username: req.session.usrname });
	}else{
		res.redirect('/');
	}
});
  

router.get('/profile',function(req, res, next){
	res.render('profile');
});

router.get('/search/',function(req, res ,next){
	res.render('search', {username: req.params.usrname});
});

router.post('/search/:usrname',function(req, res, next){

});

router.post('/list',function(req, res, next){
	res.render('list');	
});

module.exports = router;

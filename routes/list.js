var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){

	if (req.session.username){
		//res.send(req.session.username);
		collection.find({},{},function(e,docs){
    		res.render('list', docs);	
  		})

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
module.exports = router;

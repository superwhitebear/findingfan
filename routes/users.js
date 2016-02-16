var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  	var usrname = req.body.username;
	var	passwd = req.body.password;

	var db = req.db;
    // db.get(collection's name)
    var collection = db.get('users');

    collection.find({'username': usrname, 'passwd': passwd}, function(e, docs) {
        if (docs.length==1){
            req.session.username = usrname;
            res.redirect('/list');
        }else{
            res.send('Fail to Login <META http-equiv="refresh" content="1;URL=http://localhost:3000">');
        }
    });



});

module.exports = router;

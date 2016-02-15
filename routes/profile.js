var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('profiles/profile');
});


router.post('/confirm', function(req, res, next) {
    
    var confirmProfile = {
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        hight: req.body.hight,
        birthday: req.body.birthday,
        gender: req.body.gender,
        location: req.body.location,
        style: req.body.style,
        facebook: req.body.facebook,
        ig: req.body.ig,
        twitter: req.body.twitter,
        line: req.body.line,
        interested: req.body.interested
    };
	 res.render('profiles/confirm-profile', confirmProfile);
});

module.exports = router;

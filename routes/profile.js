var express = require('express');
var router = express.Router();


/* GET profile Listing. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('profiles');
    collection.find({}, {}, function(e, docs) {
        res.render('profiles/show-profile', {
            profilelist: docs
        });
    });
});


router.get('/create', function(req, res, next) {
    res.render('profiles/profile');
});

router.post('/insert', function(req, res, next) {


    var name = req.body.name;
    var age =  req.body.age;
    var weight = req.body.weight;
    var hight =  req.body.hight;
    var birthday = req.body.birthday;
    var gender = req.body.gender;
    var location =  req.body.location;
    var style = req.body.style;
    var facebook = req.body.facebook;
    var ig = req.body.ig;
    var twitter = req.body.twitter;
    var line = req.body.line;
    var interested = req.body.interested;

    var db = req.db;
    var collection = db.get('profiles');

    collection.insert({

        name: name,
        age: age,
        weight: weight,
        hight: hight,
        birthday: birthday,
        gender: gender,
        location: location,
        style: style,
        facebook: facebook,
        ig: ig,
        twitter: twitter,
        line: line,
        interested: interested

    }, function(err, docs) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        } else {
            // redirect to /users 
            res.redirect('/profile');
        }
    })
});


router.get('/remove/:name', function(req, res, next) {

    var name = req.params.name;
    
    var db = req.db;
    var collection = db.get('profiles');

    collection.remove({
        name: name
    }, function(err, docs) {
        if (err) {
            res.send("There was a problem adding the information to the database.");
        } else {
            res.redirect('/profile');
        }
    })
    

    
});

module.exports = router;

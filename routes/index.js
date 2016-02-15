var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: 'List of FANs' });
});

module.exports = router;

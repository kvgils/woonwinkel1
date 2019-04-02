var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });


/* GET home page. */
router.get('/pages/contact', function(req, res) {
  res.render('pages/contact', { title: 'views' });
});
router.get('/pages/home', function(req, res) {
    res.render('pages/home', { title: 'views' });
});

router.post('/pages/contact', urlencodedParser , function(req, res) {
    console.log(req.body);
    res.render('pages/contact-succes', { data: req.body });
});

module.exports = router;

var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  res.render('main');
})

router.get('/searchStudent', function (req, res) {
  res.render('searchStudent');
})

router.get('/addStudent', function (req, res) {
  res.render('addStudent');
})

module.exports = router
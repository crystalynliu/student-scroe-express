var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  res.render('main');
})

router.get('/searchStudent', function (req, res) {
  res.render('searchStudent', {subTitle:'Search Student', studentList: [{name: 123}, {name: 456}]});
})

router.get('/addStudent', function (req, res) {
  res.render('addStudent', {subTitle: 'Add Scores for Student'});
})

module.exports = router
const express = require('express');
const router = express.Router();
const studentList = require('./student-info.db');


// define the home page route
router.get('/', function (req, res) {
  res.render('main');
})

router.get('/searchStudent', function (req, res) {
  res.render('searchStudent', {subTitle:'Search Student', studentList: studentList});
})

router.get('/addStudent', function (req, res) {
  res.render('addStudent', {subTitle: 'Add Scores for Student'});
})

module.exports = router
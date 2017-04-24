const express = require('express');
const router = express.Router();
const studentList = require('./student-info.db');
const formatInput = require('./src/formatInput');
const handleStudentInfo = require('./src/handleStudentInfo');

router.get('/', function (req, res) {
  res.render('main');
})

router.get('/searchStudent', function (req, res) {
  res.render('searchStudent', {studentList: studentList});
})

router.get('/addStudent', function (req, res) {
  res.render('addStudent');
})

router.post('/addStudent', function (req, res) {
  let studentInfo = formatInput.studentInfoFormat(req.body);
  handleStudentInfo.addStudentInfo(studentInfo);
  res.render('addStudent', {status: 200, message: '添加学生信息成功！'});
})

module.exports = router
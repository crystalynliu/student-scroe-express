const express = require('express');
const router = express.Router();
const studentList = require('./student-info.db');
const formatInput = require('./src/formatInput');
const handleStudentInfo = require('./src/handleStudentInfo');

router.get('/', function (req, res) {
  res.render('main');
})

router.get('/searchStudent', function (req, res) {
  res.render('searchStudent', {
    studentList: studentList,
    allStudentScore: handleStudentInfo.statisticsStudentScore(studentList)});
})

router.get('/addStudent', function (req, res) {
  res.render('addStudent');
})

router.post('/addStudent', function (req, res) {
  let studentInfo = formatInput.studentInfoFormat(req.body);
  handleStudentInfo.addStudentInfo(studentInfo);
  res.render('addStudent', {status: 200, message: '添加学生信息成功！'});
})

router.post('/searchStudent', function (req, res) {
  let searchKey = req.body.studentNumber;
  let searchedStudents = !!searchKey ?
    handleStudentInfo.searchStudentByNumber(formatInput.studentNumberFormat(searchKey))
    : studentList;
  res.render('searchStudent', {
      searchKey: searchKey,
      studentList: searchedStudents,
      allStudentScore: handleStudentInfo.statisticsStudentScore(searchedStudents)});
})

module.exports = router

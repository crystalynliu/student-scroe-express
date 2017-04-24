const studentList = require('../student-info.db');
const calculateScore = require('./calculateScore');

const addStudentInfo = function (studentInfo) {
  let studentScores = calculateScore.calculateStudentScore(studentInfo.subjectScore);
  studentList.push(Object.assign({}, studentInfo, studentScores));
}

const handleStudentInfo = {
  addStudentInfo: addStudentInfo
}

module.exports = handleStudentInfo;
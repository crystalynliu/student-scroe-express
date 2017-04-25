const studentList = require('../student-info.db');
const calculateScore = require('./calculateScore');

const addStudentInfo = function (studentInfo) {
  let studentScores = calculateScore.calculateStudentScore(studentInfo.subjectScore);
  studentList.push(Object.assign({}, studentInfo, studentScores));
}

const searchStudentByNumber = function (studentNumbers) {
  if(!Array.isArray(studentNumbers)){
    throw new TypeError('input is not a validate array');
  }
  return studentNumbers.reduce((studentFilter, studentNumber) => {
    return studentFilter.concat(studentList.filter((student) => {
      return studentNumber === student.studentNumber
    }))
  }, []);
}

const handleStudentInfo = {
  addStudentInfo: addStudentInfo,
  searchStudentByNumber: searchStudentByNumber
}

module.exports = handleStudentInfo;
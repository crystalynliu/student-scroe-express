const studentList = require('../student-info.db');
const calculateScore = require('./calculateScore');

const addStudentInfo = function (studentInfo) {
  let studentScores = calculateScore.calculateStudentScore(studentInfo.subjectScore);
  studentList.push(Object.assign({}, studentInfo, studentScores));
}

const searchStudentByNumber = function (studentNumbers) {
  if (!Array.isArray(studentNumbers)) {
    throw new TypeError('input is not a validate array');
  }
  return studentNumbers.reduce((studentFilter, studentNumber) => {
    if(isNaN(studentNumber) || studentNumber === null){
      throw new TypeError('input is not a validate array');
    }
    return studentFilter.concat(findStudentInfoByNumber(studentNumber));
  }, []);
}

function findStudentInfoByNumber (studentNumber) {
  return studentList.filter((student) => {
    return parseInt(studentNumber) === student.studentNumber
  })
}

const handleStudentInfo = {
  addStudentInfo: addStudentInfo,
  searchStudentByNumber: searchStudentByNumber
}

module.exports = handleStudentInfo;

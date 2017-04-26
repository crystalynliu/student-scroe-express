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

const statisticsStudentScore = function (studentList) {
  let studentTotalScoreList = studentList.map((student) => {return student.totalScore});
  return {
    averageScore: calculateScore.calculateTotalAverageScore(studentTotalScoreList),
    medianScore: calculateScore.calculateTotalMedianScore(studentTotalScoreList)
  }
}

function findStudentInfoByNumber (studentNumber) {
  return studentList.filter((student) => {
    return parseInt(studentNumber) === student.studentNumber
  })
}

const handleStudentInfo = {
  addStudentInfo: addStudentInfo,
  searchStudentByNumber: searchStudentByNumber,
  statisticsStudentScore: statisticsStudentScore
}

module.exports = handleStudentInfo;

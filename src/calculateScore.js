const calculateStudentScore = function (subjectScore) {
  if(!subjectScore || typeof subjectScore !== 'object'){
    throw new TypeError('input is not a object');
  }
  let count = 0, totalScore = 0;
  for(let subject in subjectScore) {
    count ++;
    totalScore += subjectScore[subject];
  };
  return {averageScore: parseFloat(totalScore/count || 0), totalScore: totalScore}
}

const calculateTotalAverageScore = function (studentsTotal) {
  if(!Array.isArray(studentsTotal)){
    throw new TypeError('input is not a validate array');
  }
  let count = studentsTotal.length;
  let allStudentTotalScore = studentsTotal.reduce((totalScore, studentScore) => {
    if(isNaN(studentScore) || studentScore === null){
      throw new TypeError('input is not a validate array');
    }
    return totalScore + parseFloat(studentScore);
  }, 0);
  return parseFloat(allStudentTotalScore/count || 0);
}


const calculateScore = {
  calculateStudentScore: calculateStudentScore,
  calculateTotalAverageScore: calculateTotalAverageScore
}

module.exports = calculateScore;

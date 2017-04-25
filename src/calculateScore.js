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

const calculateScore = {
  calculateStudentScore: calculateStudentScore
}

module.exports = calculateScore;
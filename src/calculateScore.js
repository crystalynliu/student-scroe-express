const calculateStudentScore = function (subjectScore) {
  let count = 0, totalScore = 0;
  for(let subject in subjectScore) {
    count ++;
    totalScore += subjectScore[subject];
  };

  return {averageScore: parseFloat(totalScore/count), totalScore: totalScore}
}

const calculateScore = {
  calculateStudentScore: calculateStudentScore
}

module.exports = calculateScore;
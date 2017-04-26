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

const calculateTotalMedianScore = function (studentsTotal) {
  if(!Array.isArray(studentsTotal)){
    throw new TypeError('input is not a validate array');
  }
  studentsTotal.forEach((studentTotal) => {
    if(isNaN(studentTotal) || studentTotal === null){
      throw new TypeError('input is not a validate number');
    }
  })
  let sortStudentScore = studentsTotal.sort((a, b) => {
    return a - b;
  });
  let scoreLength = sortStudentScore.length;
  let medianIndex = Math.floor(scoreLength/2);
  let medianScore = parseFloat(sortStudentScore[medianIndex]) || 0;
  return (scoreLength && scoreLength % 2 === 0)
    ? (medianScore + parseFloat(sortStudentScore[medianIndex - 1]))/2 : medianScore;
}


const calculateScore = {
  calculateStudentScore: calculateStudentScore,
  calculateTotalAverageScore: calculateTotalAverageScore,
  calculateTotalMedianScore: calculateTotalMedianScore
}

module.exports = calculateScore;

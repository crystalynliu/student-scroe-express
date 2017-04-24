const studentInfoFormat = function (input) {
  return Object.assign({}, {
    studentNumber: parseInt(input.studentNumber),
    studentName: input.studentName,
    nation: input.nation,
    class: input.class,
    subjectScore: {
      math: parseFloat(input.math),
      chinese: parseFloat(input.chinese),
      english: parseFloat(input.english),
      coding: parseFloat(input.coding)
    }
  })
}

const formatInput = {
  studentInfoFormat: studentInfoFormat
}

module.exports = formatInput;
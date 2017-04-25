const studentInfoFormat = function (input) {
  if (IsNotValidateOfStudentInfo(input)) {
    throw new TypeError('Required attribute is empty！');
  }
  return {
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
  }
}

const studentNumberFormat = function (searchKey) {
  return !!searchKey ? searchKey.split(',').map((number) => {
    return parseInt(number);
  }) : [];
}

const IsNotValidateOfStudentInfo = function (input) {
  return isEmpty(input.studentNumber) || isNotNumber(input.studentNumber)
    || isEmpty(input.studentName)
    || isEmpty(input.math) || isNotNumber(input.math)
    || isEmpty(input.chinese) || isNotNumber(input.chinese)
    || isEmpty(input.english) || isNotNumber(input.english)
    || isEmpty(input.coding) || isNotNumber(input.coding)
}

const formatInput = {
  studentInfoFormat: studentInfoFormat,
  studentNumberFormat: studentNumberFormat,
  IsNotValidateOfStudentInfo: IsNotValidateOfStudentInfo
}

function isEmpty (input) {
  return !input;
}

function isNotNumber (input) {
  return isNaN(input);
}

module.exports = formatInput;
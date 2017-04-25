const handleStudentInfo = require('../src/handleStudentInfo');

describe('handle student information in db file', function () {

  describe('get student information by numbers', function () {
    it('return select student information when input is student number array', function () {
      const studentNumbers = [111111];

      const expectResult = [{
        studentNumber: 111111,
        studentName: '刘 XXX',
        nation: '汉',
        class: '一班',
        subjectScore: {
          math : 80,
          chinese: 90,
          english: 65,
          coding: 98
        },
        averageScore: 83.25,
        totalScore: 333
      }]

      expect(handleStudentInfo.searchStudentByNumber(studentNumbers)).toEqual(expectResult);
    })

    it('return select student information when input is two student numbers', function () {
      const studentNumbers = [111111, 111112];

      const expectResult = [{
        studentNumber: 111111,
        studentName: '刘 XXX',
        nation: '汉',
        class: '一班',
        subjectScore: {
          math : 80,
          chinese: 90,
          english: 65,
          coding: 98
        },
        averageScore: 83.25,
        totalScore: 333
      }, {
        studentNumber: 111112,
        studentName: '张 XXX',
        nation: '',
        class: '一班',
        subjectScore: {
          math : 60,
          chinese: 65,
          english: 45,
          coding: 80
        },
        averageScore: 62.5,
        totalScore: 250
      }]

      expect(handleStudentInfo.searchStudentByNumber(studentNumbers)).toEqual(expectResult);
    })

    it('return select student information when input is two student numbers', function () {
      const studentNumbers = [111111, 111112];

      const expectResult = [{
        studentNumber: 111111,
        studentName: '刘 XXX',
        nation: '汉',
        class: '一班',
        subjectScore: {
          math : 80,
          chinese: 90,
          english: 65,
          coding: 98
        },
        averageScore: 83.25,
        totalScore: 333
      }, {
        studentNumber: 111112,
        studentName: '张 XXX',
        nation: '',
        class: '一班',
        subjectScore: {
          math : 60,
          chinese: 65,
          english: 45,
          coding: 80
        },
        averageScore: 62.5,
        totalScore: 250
      }]

      expect(handleStudentInfo.searchStudentByNumber(studentNumbers)).toEqual(expectResult);
    })

    it('return empty array when input is empty array', function () {
      const studentNumbers = [];
      const expectResult = [];
      expect(handleStudentInfo.searchStudentByNumber(studentNumbers)).toEqual(expectResult);
    })

    it('throw error when input is not a array', function () {
      const studentNumbers = '123456';
      expect(function(){
        handleStudentInfo.searchStudentByNumber(studentNumbers)
      }).toThrow('input is not a validate array');
    })

    it('throw error when input is null', function () {
      const studentNumbers = null;
      expect(function(){
        handleStudentInfo.searchStudentByNumber(studentNumbers)
      }).toThrow('input is not a validate array');
    })

    it('throw error when input is undefined', function () {
      const studentNumbers = undefined;
      expect(function(){
        handleStudentInfo.searchStudentByNumber(studentNumbers)
      }).toThrow('input is not a validate array');
    })
  })
})
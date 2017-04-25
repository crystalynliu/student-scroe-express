const calculateScore = require('../src/calculateScore');

describe('test calculate Scores of students', function () {

  describe('calculate total score and average score about students\' subject', function () {
    it('check result is right when student have 5 subjects', function () {
      const subjects = {
        math: 100,
        english: 30,
        chinese: 45,
        coding: 90,
        compute: 80
      }

      const expectResult = {
        averageScore: 69,
        totalScore: 345
      }

      expect(calculateScore.calculateStudentScore(subjects)).toEqual(expectResult);
    })

    it('check result is zero when student have 0 subjects', function () {
      const subjects = {}
      const expectResult = {
        averageScore: 0,
        totalScore: 0
      }

      expect(calculateScore.calculateStudentScore(subjects)).toEqual(expectResult);
    })

    it('throw error when input is a string', function () {
      const subjects = '12345';

      expect(function(){
        calculateScore.calculateStudentScore(subjects)
      }).toThrow('input is not a object');
    })

    it('throw error when input is null', function () {
      const subjects = null;
      expect(function(){
        calculateScore.calculateStudentScore(subjects)
      }).toThrow('input is not a object');
    })

    it('throw error when input is undefined', function () {
      const subjects = undefined;
      expect(function(){
        calculateScore.calculateStudentScore(subjects)
      }).toThrow('input is not a object');
    })
  })
})
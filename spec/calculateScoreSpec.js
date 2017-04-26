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

      expect(function () {
        calculateScore.calculateStudentScore(subjects)
      }).toThrow('input is not a object');
    })

    it('throw error when input is null', function () {
      const subjects = null;
      expect(function () {
        calculateScore.calculateStudentScore(subjects)
      }).toThrow('input is not a object');
    })

    it('throw error when input is undefined', function () {
      const subjects = undefined;
      expect(function () {
        calculateScore.calculateStudentScore(subjects)
      }).toThrow('input is not a object');
    })
  })

  describe('calculate all student total average score', function () {
    it('check result is right when input the all students total scores', function () {
      const studentsScore = [333, 250];
      const expectResult = 291.5;
      expect(calculateScore.calculateTotalAverageScore(studentsScore)).toEqual(expectResult);

    })

    it('check result is zero when input is an empty array', function () {
      const studentsScore = [];
      const expectResult = 0;
      expect(calculateScore.calculateTotalAverageScore(studentsScore)).toEqual(expectResult);
    })

    it('check result is right when input is a number string array', function () {
      const studentsScore = ['123', '456'];
      const expectResult = 289.5;
      expect(calculateScore.calculateTotalAverageScore(studentsScore)).toEqual(expectResult);
    })

    it('throw error when input is a not number string array', function () {
      const studentsScore = ['abc', '++'];
      expect(function(){
        calculateScore.calculateTotalAverageScore(studentsScore)
      }).toThrow('input is not a validate array');
    })

    it('throw error when inputs have an undefined value', function () {
      const studentsScore = [undefined];
      expect(function(){
        calculateScore.calculateTotalAverageScore(studentsScore)
      }).toThrow('input is not a validate array');
    })

    it('throw error when inputs have an null value', function () {
      const studentsScore = [null];
      expect(function(){
        calculateScore.calculateTotalAverageScore(studentsScore)
      }).toThrow('input is not a validate array');
    })

    it('throw error when input is not an array', function () {
      const studentsScore = '123';
      expect(function(){
        calculateScore.calculateTotalAverageScore(studentsScore)
      }).toThrow('input is not a validate array');
    })
  })

  describe('calculate median of all students\' total score', function () {
    it('check result is right when input length of all students\' score is odd', function () {
      const studentsScore = [100, 360, 210];
      const expectResult = 210;
      expect(calculateScore.calculateTotalMedianScore(studentsScore)).toBe(expectResult);
    })

    it('check result is right when input length of all students\' score is even', function () {
      const studentsScore = [100, 360, 130.5, 210];
      const expectResult = 170.25;
      expect(calculateScore.calculateTotalMedianScore(studentsScore)).toBe(expectResult);
    })

    it('check result is right when input length of all students\' score is one', function () {
      const studentsScore = [100];
      const expectResult = 100;
      expect(calculateScore.calculateTotalMedianScore(studentsScore)).toBe(expectResult);
    })

    it('check result is right when input length of all students\' score is zero', function () {
      const studentsScore = [];
      const expectResult = 0;
      expect(calculateScore.calculateTotalMedianScore(studentsScore)).toBe(expectResult);
    })

    it('throw error when input is not a array', function () {
      const studentsScore = '123';
      expect(function(){
        calculateScore.calculateTotalMedianScore(studentsScore)
      }).toThrow('input is not a validate array');
    })

    it('throw error when input is null', function () {
      const studentsScore = null;
      expect(function(){
        calculateScore.calculateTotalMedianScore(studentsScore)
      }).toThrow('input is not a validate array');
    })

    it('throw error when input is undefined', function () {
      const studentsScore = undefined;
      expect(function(){
        calculateScore.calculateTotalMedianScore(studentsScore)
      }).toThrow('input is not a validate array');
    })

    it('throw error when input is a number string array', function () {
      const studentsScore = ['100', '200'];
      const expectResult = 150;
      expect(calculateScore.calculateTotalMedianScore(studentsScore)).toBe(expectResult);
    })

    it('throw error when input is not a number array', function () {
      const studentsScore = ['abc', '++'];
      expect(function(){
        calculateScore.calculateTotalMedianScore(studentsScore)
      }).toThrow('input is not a validate number');
    })

    it('throw error when input has a undefined value', function () {
      const studentsScore = [undefined];
      expect(function(){
        calculateScore.calculateTotalMedianScore(studentsScore)
      }).toThrow('input is not a validate number');
    })

    it('throw error when input has a null value', function () {
      const studentsScore = [null];
      expect(function(){
        calculateScore.calculateTotalMedianScore(studentsScore)
      }).toThrow('input is not a validate number');
    })

  })
})

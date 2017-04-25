const formatInput = require('../src/formatInput');

describe("test format the input", function () {

  describe('format the input about add student info', function () {
    it('return student information object when all attributes of input is not empty', function () {
        const studentInfoInputs = {
          studentNumber: '12344',
          studentName: 'zhang ooo',
          nation: 'llll',
          class: 'kkkk',
          math: '90',
          chinese: '80',
          english: '70',
          coding: '80'
        }

        const expectResult = {
          studentNumber: 12344,
          studentName: 'zhang ooo',
          nation: 'llll',
          class: 'kkkk',
          subjectScore: {
            math: 90,
            chinese: 80,
            english: 70,
            coding: 80
          }
        }

        let result = formatInput.studentInfoFormat(studentInfoInputs);
        expect(result).toEqual(expectResult);
    })

    it('return student information object when not required attributes of input is empty', function () {
      const studentInfoInputs = {
        studentNumber: '12344',
        studentName: 'zhang ooo',
        nation: '',
        class: '',
        math: '90',
        chinese: '80',
        english: '70',
        coding: '80'
      }

      const expectResult = {
        studentNumber: 12344,
        studentName: 'zhang ooo',
        nation: '',
        class: '',
        subjectScore: {
          math: 90,
          chinese: 80,
          english: 70,
          coding: 80
        }
      }

      let result = formatInput.studentInfoFormat(studentInfoInputs);
      expect(result).toEqual(expectResult);
    })

    it('return throw error when student number are empty', function () {
      const studentInfoInputs = {
        studentNumber: '',
        studentName: '',
        nation: 'llll',
        class: 'kkkk',
        math: '',
        chinese: '',
        english: '',
        coding: ''
      }

      expect(function () {
        formatInput.studentInfoFormat(studentInfoInputs);
      }).toThrow('Required attribute is empty！');
    })
  })

  describe('test check validation about student information', function () {
    it('return true when student number is empty', function () {
      const studentInfoInputs = {
        studentNumber: '',
        studentName: 'lll',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '80',
        english: '70',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when student number is not a number', function () {
      const studentInfoInputs = {
        studentNumber: 'abc',
        studentName: 'lll',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '80',
        english: '70',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when student name is empty', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: '',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '80',
        english: '70',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when math is empty', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: '',
        chinese: '80',
        english: '70',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when math is not number', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: 'abc',
        chinese: '80',
        english: '70',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when chinese is empty', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '',
        english: '70',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when chinese is not number', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: 'abc',
        english: '70',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when english is empty', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '80',
        english: '',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when english is not number', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '80',
        english: 'abc',
        coding: '60'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when coding is empty', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '80',
        english: '80',
        coding: ''
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return true when coding is not number', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '80',
        english: '90',
        coding: 'abc'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(true);
    })

    it('return false when all attributes is validate', function () {
      const studentInfoInputs = {
        studentNumber: '123',
        studentName: 'abc',
        nation: 'llll',
        class: 'kkkk',
        math: '90',
        chinese: '80',
        english: '90',
        coding: '90'
      }

      expect(formatInput.IsNotValidateOfStudentInfo(studentInfoInputs)).toBe(false);
    })
  })
})
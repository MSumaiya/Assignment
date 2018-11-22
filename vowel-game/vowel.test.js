
const spliting = require('./vowel.js');


describe('spliting words', () => {

  test('should throw error if input is invalid', () => {
    expect(() => {
      spliting.transform('towel', '&%%s');
    }).toThrow('error');
  });

  test('should throw error if input is a number', () => {
    expect(() => {
      spliting.transform('123', '456');
    }).toThrow('error');
  });

  test('should throw error if input is a space', () => {
    expect(() => {
      spliting.transform('apple', ' ');
    }).toThrow('error');
  });
  test('should throw error if word contains a space', () => {
    expect(() => {
      spliting.transform('apple', 'me lon');
    }).toThrow('error');
  });

  test('should return the same words in an array if they do not contain vowel', () => {

    const result = spliting.transform('mms', 'ssm');
    expect(result).toEqual(['mms', 'ssm']);
  });
  test('should accept empty string', () => {

    const result = spliting.transform('', '');
    expect(result).toEqual(['', '']);
  });
  test('should return the same input if one is a word and another one is empty string', () => {

    const result = spliting.transform('mms', '');
    expect(result).toEqual(['mms', '']);
  });
  test('should accept upper case words as input value', () => {

    const result = spliting.transform('TOWEL', 'CAR');
    expect(result).toEqual(['tor', 'cawel']);
  });
  test('output should be in lower case', () => {

    const result = spliting.transform('TOWEL', 'Car');
    expect(result).toEqual(['tor', 'cawel']);
  });
  test('should tranform the words', () => {

    const result = spliting.transform('towel', 'car');

    expect(result).toEqual(['tor', 'cawel']);
  });

});

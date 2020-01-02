// // should calculate add expression
// // should calculate subtract expression
// // should calculate multiply expression
// // should calculate division expression
// // should throw exception when operation is 
//          undefined (like division by zero)
// // should throw exception when expression is not 
//          recognized (like not a mathematical expression)
// // should handle spaces in expression (
//     like any of the followng expressions are ok: "a+b", "a + b", "a    + b")


const assert = require('assert');
const calculator = require('./calctest.js');

describe('Caculator', () => {
  it('should calculate addition', () => {
    const result = calculator.calculate('1+3');
    assert.equal(result, 4);
  });


  it('should calculate substraction', () => {
    const result = calculator.calculate('3-1');
    assert.equal(result, 2);
  });

  it('should calculate multiplication', () => {
    const result = calculator.calculate('3*3');
    assert.equal(result, 9);
  });

  it('should calculate division', () => {
    const result = calculator.calculate('9/3');
    assert.equal(result, 3);
  });

  it('should not allow 0', () => {
    const result = calculator.calculate('0');
    assert.equal(result, 'not allowed');
  });

  it.skip('expression cannot have 0 as a dividing operator', () => {
    const result = calculator;
  });
});

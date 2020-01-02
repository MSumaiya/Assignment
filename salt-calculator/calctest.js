//const client = require('./cli.js');
/*function ifZero(expression) {
  const par1 = expression.split('/');
  if (parseInt(par1[1]) === 0) {
    return 'not allowed';
  }*/




function calculate(expression) {

  function expParse(expr, operator, f) {
    const a = expr.split(operator);
    const b = parseInt(a[0]);
    const c = parseInt(a[1]);
    return f(b, c);
  }

  if (expression.includes('+')) {
    return expParse(expression, '+', (b, c) => b + c);
  } else if (expression.includes('-')) {
    return expParse(expression, '-', (b, c) => b - c);
  } else if (expression.includes('*')) {
    return expParse(expression, '*', (b, c) => b * c);
  } else if (expression.includes('/')) {
    if (parseInt(a[1]) === 0) {
      return ('not allowed');
    } else
      return expParse(expression, '/', (b, c) => b / c);
  }

}



module.exports.calculate = calculate;

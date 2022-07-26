// https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};

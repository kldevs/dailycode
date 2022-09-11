// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

function getSumOfDigits(integer) {
  var sum = 0;
  var digits = Math.floor(integer).toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}

// https://www.codewars.com/kata/528e95af53dcdb40b5000171

function factorial(n) {
  return n < 0 ? null : n > 0 ? n * factorial(n - 1) : 1
}

// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(array) {
  return array.reduce((sum, x) => sum + x, 0) % 2 === 0 ? "even" : "odd"
}
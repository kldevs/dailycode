// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
  return array.map(x => Number.isInteger(x**.5) ? x**.5 : x**2)  
}
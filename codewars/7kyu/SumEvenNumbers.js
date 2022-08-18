// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

function sumEvenNumbers(input){
  return input.reduce((p,c) => p + (c % 2 === 0 ? c : 0), 0)
}

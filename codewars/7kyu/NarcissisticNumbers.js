// https://www.codewars.com/kata/56b22765e1007b79f2000079

function isNarcissistic(n){
  const arr = String(n).split("")
  return n === arr.reduce((sum, x) => sum += x ** arr.length, 0)
}
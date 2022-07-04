// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

function findSum(n){
  return [...Array(n + 1).keys()].reduce((s,x) => x % 3 === 0 || x % 5 === 0 ? s + x : s, 0)
}

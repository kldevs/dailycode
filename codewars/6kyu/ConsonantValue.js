// https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s){
  return Math.max(...s
  .match(/[^aeiou]+/g)
  .map(x => x.split('').reduce((s, x) => s += x.charCodeAt(0) - 96, 0)))
}

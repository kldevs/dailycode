// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014

function solve(s){
  return Math.max(...s.match(/\d+/g))
}

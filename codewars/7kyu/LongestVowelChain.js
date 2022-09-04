// https://www.codewars.com/kata/59c5f4e9d751df43cf000035

function solve(s){
  return (s.match(/[aeiou]+/ig) || []).reduce((p,c) => p < c.length ? c.length : p, 0)
}

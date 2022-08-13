// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s){
  return [...s].filter(x => x === x.toUpperCase()).length > [...s].filter(x => x === x.toLowerCase()).length ? s.toUpperCase() : s.toLowerCase()
}

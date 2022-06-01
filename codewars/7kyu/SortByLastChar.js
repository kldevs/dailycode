// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

function last(x){
  return x.split(" ").sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}
// https://www.codewars.com/kata/526989a41034285187000de4

function ipsBetween(start, end){
  let a32 = parseInt(start.split('.').map(x => (+x).toString(2).padStart(8, '0')).join(''), 2)
  let b32 = parseInt(end.split('.').map(x => (+x).toString(2).padStart(8, '0')).join(''), 2)
  return b32 - a32
}

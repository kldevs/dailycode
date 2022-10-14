// https://www.codewars.com/kata/5a438bc1e1ce0e129100005a

function unusualLexOrder(arr){
  return arr.sort((a,b) => [...a].reverse().join('').localeCompare([...b].reverse().join('')))
}

// https://www.codewars.com/kata/5878520d52628a092f0002d0

function stringTransformer(str){
  return str.split(' ')
  .reverse()
  .join(' ')
  .split('')
  .map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
  .join('')
}

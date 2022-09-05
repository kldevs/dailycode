// https://www.codewars.com/kata/57a62154cf1fa5b25200031e

function alternateCase(s){
  return [...s].map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
}

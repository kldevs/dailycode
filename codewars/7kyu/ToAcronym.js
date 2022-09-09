// https://www.codewars.com/kata/57a60bad72292d3e93000a5a

function toAcronym(inp) {
  return inp.match(/\b\w/ig).join('').toUpperCase()
}

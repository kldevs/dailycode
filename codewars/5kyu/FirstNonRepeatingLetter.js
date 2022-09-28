// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  return s === '' || (s.length > 1 && [...s].every(x => x === s[0])) ? '' : s[[...s].map(x => x.toLowerCase()).findIndex((x, i, a) => a.indexOf(x) === a.lastIndexOf(x))] || ''
}

// https://www.codewars.com/kata/580755730b5a77650500010c

function sortMyString(S) {
  return [...S].filter((x, i) => i % 2 === 0).join('') + ' ' + [...S].filter((x, i) => i % 2 === 1).join('')
}

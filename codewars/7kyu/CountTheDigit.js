// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
  return [...Array(n + 1).keys()].map(x => x ** 2).join('').split('').filter(x => x === `${d}`).length
}

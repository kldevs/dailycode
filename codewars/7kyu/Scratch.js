// https://www.codewars.com/kata/594a1822a2db9e93bd0001d4

function scratch(lottery) {
  return lottery.map(x => x.split(' ')).reduce((p, c) => c[0] === c[1] && c[1] === c[2] ? p + +c[3] : p, 0)
}

// https://www.codewars.com/kata/5546180ca783b6d2d5000062

function squares(x, n) {
  return n > 0 ? [...Array(n)].map((y, i) => x ** (2 ** i)) : []
}

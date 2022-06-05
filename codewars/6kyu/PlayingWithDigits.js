// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p){
  const res = `${n}`.split('').reduce((sum, x, i) => sum += x ** (p + i), 0)
  return res % n === 0 ? res / n : -1
}
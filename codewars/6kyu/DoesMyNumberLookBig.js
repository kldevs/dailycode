// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  return value === String(value).split("").reduce((sum, x, i, arr) => sum += x ** arr.length, 0)
}
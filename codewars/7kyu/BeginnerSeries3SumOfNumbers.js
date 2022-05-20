// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  let sum = 0
  let max = Math.max(a, b)
  let min = max === a ? b : a
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
}
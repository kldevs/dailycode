// https://www.codewars.com/kata/62a611067274990047f431a8

function alternate(n, firstValue, secondValue) {
  return [...Array(n).keys()].map((x, i) => x = (i % 2 === 0 ? firstValue : secondValue))
}

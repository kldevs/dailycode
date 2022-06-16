// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  let min = numbers.findIndex(x => x === Math.min(...numbers))
  return numbers.slice(0, min).concat(numbers.slice(min+1))
}

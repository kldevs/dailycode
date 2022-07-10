// https://www.codewars.com/kata/56a1c074f87bc2201200002e

function smaller(nums) {
  return nums.map((x, i, a) => a.slice(i + 1).filter(n => x > n).length)
}

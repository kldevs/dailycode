// https://www.codewars.com/kata/55d277882e139d0b6000005d

var findAverage = function (nums) {
  return nums.reduce((s,x) => s += x) / nums.length
}

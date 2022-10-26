// https://www.codewars.com/kata/555b73a81a6285b6ce000047

function add(...nums){
  return nums.reduce((p,c,i) => p + c * (i + 1), 0)
}

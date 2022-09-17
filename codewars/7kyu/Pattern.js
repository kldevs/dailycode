// https://www.codewars.com/kata/5572f7c346eb58ae9c000047

function pattern(n){
  return n < 1 ? "" : [...Array(n)].map((x, i) => `${i + 1}`.repeat(i + 1)).join('\n')
}

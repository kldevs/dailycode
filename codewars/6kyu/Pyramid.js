// https://www.codewars.com/kata/515f51d438015969f7000013

function pyramid(n) {
  return Array(n).fill([]).map((x,i) => Array(i +1).fill(1))
}

// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr){
  return arr.reduce((s, x) => x.match(/[:;][-~]?[)D]/g) != null ? s += 1 : s, 0)
}

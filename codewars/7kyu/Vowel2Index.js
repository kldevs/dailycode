// https://www.codewars.com/kata/55d410c492e6ed767000004f

function vowel2index(str){
  return str.replace(/[aeiou]/ig, (x,i) => i + 1)
}

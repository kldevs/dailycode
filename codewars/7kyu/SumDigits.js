// https://www.codewars.com/kata/52f3149496de55aded000410

function sumDigits(number){
  return String(number).split('').reduce((s,x) => Number.isInteger(+x) ? s + +x : s, 0)
}

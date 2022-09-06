// https://www.codewars.com/kata/598f76a44f613e0e0b000026

function sumOfIntegersInString(s){
  return (s.match(/\d+/g) || []).reduce((p,c) => p + +c, 0)
}

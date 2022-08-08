// https://www.codewars.com/kata/553e8b195b853c6db4000048

function hasUniqueChars(str){
  return [...str].every((x,i,a) => a.indexOf(x) === a.lastIndexOf(x))
}

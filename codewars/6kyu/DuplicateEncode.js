// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
  return word
  .toLowerCase()
  .split('')
  .map((x,i,a) => a.indexOf(x) === a.lastIndexOf(x) ? "(" : ")")
  .join('')
}

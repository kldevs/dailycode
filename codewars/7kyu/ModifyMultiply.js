// https://www.codewars.com/kata/5ace2d9f307eb29430000092

function modifyMultiply(str, loc, num){
  return Array(num).fill(str.split(' ')[loc]).join('-')
}

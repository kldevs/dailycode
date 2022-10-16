// https://www.codewars.com/kata/5822d89270ca28c85c0000f3

function scramble(str, arr){
  return arr.reduce((p,c,i) => p + str[arr.findIndex(x => x === i)], '')
}

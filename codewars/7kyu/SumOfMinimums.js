// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

function sumOfMinimums(arr){
  return arr.reduce((s,x) => s += Math.min(...x), 0)
}

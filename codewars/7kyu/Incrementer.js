// https://www.codewars.com/kata/590e03aef55cab099a0002e8

function incrementer(arr){
  return arr.map((x,i) => (x + i + 1) % 10)
}
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr){
  return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
}
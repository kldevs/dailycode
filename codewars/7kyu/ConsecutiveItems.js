// https://www.codewars.com/kata/5f6d533e1475f30001e47514

function consecutive(arr, a, b){
  indexA = arr.findIndex(x => x === a)
  return b === arr[indexA + 1] || b === arr[indexA - 1]
}
// https://www.codewars.com/kata/595aa94353e43a8746000120

function findDeletedNumber(arr, mixArr){
  return arr.length === mixArr.length ? 0 : mixArr.sort((a,b) => a - b).findIndex((x, i)=> x !== i + 1) + 1
}

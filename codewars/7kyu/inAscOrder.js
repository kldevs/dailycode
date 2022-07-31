// https://www.codewars.com/kata/56b7f2f3f18876033f000307

function inAscOrder(arr){
  return arr.every((x,i,a) => i === 0 ? x <= a[i + 1] : x >= a[i-1])
}

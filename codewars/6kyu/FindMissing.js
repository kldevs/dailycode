// https://www.codewars.com/kata/52de553ebb55d1fca3000371

var findMissing = function (list) {  
  let step = (list[list.length - 1] - list[0]) / list.length
  return list.find((x, i, a) => x + step !== a[i + 1]) + step
}

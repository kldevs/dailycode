// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let res = num
  let count = 0
  
  while (String(res).length !== 1){
    res = String(res).split('').reduce((prod, x) => prod * x, 1)
    count++
  }
  return count
}
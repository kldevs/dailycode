// https://www.codewars.com/kata/57a049e253ba33ac5e000212

function factorial(n){
  return [...Array(n)].map((x,i) => i + 1).reduce((s,x) => s *= x, 1)
}

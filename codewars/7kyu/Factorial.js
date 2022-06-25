// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

function factorial(n)
{
  if(n < 0 || n > 12) throw RangeError
  return n === 0 ? 1 : [...Array(n)].map((x, i) => i + 1).reduce((res, x) => res * x, 1)
}

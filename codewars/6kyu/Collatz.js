// https://www.codewars.com/kata/5286b2e162056fd0cb000c20

function collatz(n) {
  return n-1 ? `${n}->${collatz(n%2 === 0 ? n/2 : 3*n+1)}` : '1'
}

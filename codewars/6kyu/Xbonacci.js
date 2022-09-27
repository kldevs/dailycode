// https://www.codewars.com/kata/556e0fccc392c527f20000c5

function Xbonacci(signature, n) {
  const x = signature.length
  for(i = x; i < n; i++)
    signature.push(signature.slice(i - x, i).reduce((p,c)=> p + c, 0))
  return signature.slice(0,n)
}

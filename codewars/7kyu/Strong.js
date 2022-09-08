// https://www.codewars.com/kata/5a4d303f880385399b000001

function strong(n){
  return [...String(n)].map(x => [...Array(+x)].map((z, i) => i + 1).reduce((p, c) => p * c, 1)).reduce((s, y) => s + y, 0) === n ? "STRONG!!!!" : "Not Strong !!"
}

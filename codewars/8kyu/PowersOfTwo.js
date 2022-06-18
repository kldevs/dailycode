// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n){
  return [...Array(n + 1)].map((x,i) => 2**i)
}

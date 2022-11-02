// https://www.codewars.com/kata/580751a40b5a777a200000a1

function vowelOne(s){
  return s
    .replace(/[^aeiou]/gi, '0')
    .replace(/[aeiou]/gi, '1')
}

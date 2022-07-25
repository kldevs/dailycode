// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

function cleanString(s){
  return s.includes('#') ? cleanString(s.substring(0, s.indexOf('#') - 1) + s.substring(s.indexOf('#') + 1)) : s
}

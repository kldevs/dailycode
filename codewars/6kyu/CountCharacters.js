// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string){
  let chars = {}
  string.split('').forEach(x => chars[x] ? chars[x]++ : (chars[x] = 1))
  return chars
}
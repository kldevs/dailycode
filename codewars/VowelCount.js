// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  var vowelsCount = 0;
  
  vowelsCount = (str.match(/[aeiou]/ig) || []).length
  
  return vowelsCount;
}
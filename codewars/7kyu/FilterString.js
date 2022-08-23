// https://www.codewars.com/kata/55b051fac50a3292a9000025

var FilterString = function(value) {
  return +[...value].filter(x => !isNaN(x)).join('')
}

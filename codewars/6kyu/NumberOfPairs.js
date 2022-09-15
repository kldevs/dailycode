// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

function numberOfPairs(gloves){
  pairs = {}
  gloves.forEach(x => pairs[x] ? pairs[x]++ : pairs[x] = 1)
  return Object.values(pairs).reduce((p,c) => p + Math.floor(c/2), 0)
}

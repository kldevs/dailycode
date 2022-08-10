// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

function longestRepetition(str){
  matches = str.match(/(\w)\1*/g)
  const l = Array.isArray(matches) ? matches.reduce((p, c) => c.length > p ? c.length : p, 0) : 0
  const c = Array.isArray(matches) ? matches.find(x => x.length === l)[0] : ""
  return [c, l]
}

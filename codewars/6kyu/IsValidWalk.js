// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk){
  let ns = 0, ew = 0
  walk.forEach(x => x === "N" ? ns++ : x === "S" ? ns-- : x === "E" ? ew++ : ew--)
  return walk.length === 10 && ns === 0 && ew === 0
}

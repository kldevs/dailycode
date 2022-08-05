// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d

function letterCount(s) {
  let map = {}
  s.split('').forEach(x => map[x] ? map[x] += 1 : map[x] = 1)
  return map
}

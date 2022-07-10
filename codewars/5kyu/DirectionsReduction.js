// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
  let opposite = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  }
  let index = arr.findIndex((x, i, a) => opposite[x] === a[i + 1])
  return index === -1 ? arr : dirReduc(arr.slice(0, index).concat(arr.slice(index + 2)))
}

// https://www.codewars.com/kata/563b74ddd19a3ad462000054

function stringy(size) {
  return "10".repeat(size / 2) + (size % 2 === 0 ? "" : "1")
}
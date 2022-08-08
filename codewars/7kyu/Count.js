// https://www.codewars.com/kata/5569b10074fe4a6715000054

function count(array){
  elements = {}
  array.forEach(x => elements[x] ? elements[x] += 1 : elements[x] = 1)
  return elements
}

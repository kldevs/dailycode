// https://www.codewars.com/kata/60113ded99cef9000e309be3

function separateTypes(input) {
  let types = {}
  input.forEach(x => types[typeof (x)] ? types[typeof (x)].push(x) : types[typeof (x)] = [x])
  return types
}

// https://www.codewars.com/kata/54fb853b2c8785dd5e000957

function chain(input, fs) {
  return fs.reduce((result, fn) => fn(result), input)
}
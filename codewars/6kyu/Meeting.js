// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
  return s
  .split(';')
  .map(x => `(${x.split(':').reverse().join(', ')})`.toUpperCase())
  .sort()
  .join('')
}

// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
  return +[...new Set(values)].sort().join('')
}

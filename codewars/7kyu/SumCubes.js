// https://www.codewars.com/kata/59a8570b570190d313000037

function sumCubes(n){
  return [...Array(n)].reduce((p, c, i) => p + (i + 1) ** 3, 0)
}

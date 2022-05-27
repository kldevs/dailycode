// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  const oddSort = array.filter(x => Math.abs(x % 2) === 1).sort((a, b) => b - a)
  return array.map(x => x = x % 2 === 0 ? x : oddSort.pop())
}
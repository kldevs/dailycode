// https://www.codewars.com/kata/58e0cb3634a3027180000040

function sortByValueAndIndex(array){
  return array
    .map((x, i) => [x, x * (i + 1)])
    .sort((a, b) => a[1] - b[1])
    .map(x => x[0])
}

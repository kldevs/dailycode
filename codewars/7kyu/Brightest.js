// https://www.codewars.com/kata/62eb800ba29959001c07dfee

function brightest(colors){
  return colors.sort((a, b) => Math.max(...b.match(/[^#]{2}/g).map(y => parseInt(y, 16))) - Math.max(...a.match(/[^#]{2}/g).map(y => parseInt(y, 16))))[0]
}

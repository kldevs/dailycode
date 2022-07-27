// https://www.codewars.com/kata/5898b4b71d298e51b600014b

function sortTheInnerContent(words){
  return words
  .split(' ')
  .map(x => x.length >= 4 ? x[0] + x.slice(1, -1).split('').sort((a,b) => b.localeCompare(a)).join('') + x[x.length - 1] : x )
  .join(' ')
}

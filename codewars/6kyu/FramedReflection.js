// https://www.codewars.com/kata/581331293788bc1702001fa6

function mirror(text){
  let words = text.split(' ')
  let chars = Math.max(...words.map(x => x.length)) + 4
  words = words.map(x => '* ' + [...x].reverse().join('') + ' '.repeat(chars - x.length - 3) + '*')
  return ['*'.repeat(chars), ...words, '*'.repeat(chars)].join('\n')
}

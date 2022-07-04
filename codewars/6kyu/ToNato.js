// https://www.codewars.com/kata/586538146b56991861000293

function to_nato(words) {
  return words.toLowerCase().split(' ').map(x => x.split('').map( x=> x === ',' || x === '.' || x === '!' || x === '?' ? x : NATO[x]).join(' ')).join(' ')
}

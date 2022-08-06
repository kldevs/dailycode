// https://www.codewars.com/kata/59706036f6e5d1e22d000016

function wordsToMarks(string){
  return [...string].reduce((p, c) => p + c.charCodeAt() - 96, 0)
}

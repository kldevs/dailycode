// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
  let words = x.toLowerCase().split(' ')
  let scores = words.map(word => word.split('').reduce((sum, char)=> sum += (char.charCodeAt(0) - 96), 0))
  let max = Math.max.apply(0, scores)
  return words[scores.findIndex(n => n === max)]
}
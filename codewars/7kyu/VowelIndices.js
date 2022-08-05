// https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word){
  vowelIndex = []
  word.toLowerCase().split('').forEach((x,i) => x === "a" || x === "e" || x === "i" || x === "o" || x === "u" || x === "y" ? vowelIndex.push(i+1) : x)
  return vowelIndex
}

// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  let letters = {}
  let isogram = str.toLowerCase()
  for(let i = 0; i < isogram.length; i++){
    if(letters[isogram[i]] === undefined)
      letters[isogram[i]] = 0
    letters[isogram[i]]++
  }
  return Object.values(letters).filter(x => x > 1).length === 0
}
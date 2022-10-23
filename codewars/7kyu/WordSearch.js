// https://www.codewars.com/kata/5545f847bd94d050be00011d

function wordSearch(word, text){
  let regex = new RegExp('\\b' + word + '\\b')
  return regex.test(text)
}

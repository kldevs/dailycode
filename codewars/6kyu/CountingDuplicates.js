// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript

function duplicateCount(text) {
  let letters = {}
  let str = text.toLowerCase()
  for(let i = 0; i < str.length; i++){
    if(letters[str[i]] === undefined)
      letters[str[i]] = 0
    letters[str[i]]++
  }
  return Object.values(letters).filter(x => x > 1).length
}
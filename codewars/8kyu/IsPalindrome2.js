// https://www.codewars.com/kata/57a5015d72292ddeb8000b31

function isPalindrome(line){
  return String(line) === String(line).split('').reverse().join('')
}

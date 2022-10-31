// https://www.codewars.com/kata/57029e77005264a3b9000eb5

function nothingSpecial(str) {
  return typeof str === 'string' ? str.replace(/[^a-z0-9\s]/gi ,'') : 'Not a string!'
}

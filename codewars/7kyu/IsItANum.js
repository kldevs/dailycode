// https://www.codewars.com/kata/596343a24489a8b2a00000a2

function isItANum(str){
  let phone = str.replace(/\D/g, '')
  return /^0\d{10}$/.test(phone) ? phone : 'Not a phone number'
}

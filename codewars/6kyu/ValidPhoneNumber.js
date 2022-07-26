// https://www.codewars.com/kata/525f47c79f2f25a4db000025

function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phoneNumber)
}

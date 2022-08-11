// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

function evenNumbers(array, number){
  return array.filter(x => x % 2 === 0).slice(-number)
}

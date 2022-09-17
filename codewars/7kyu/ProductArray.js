// https://www.codewars.com/kata/5a905c2157c562994900009d

function productArray(numbers){
  const allNums = numbers.reduce((p,c) => p*c, 1)
  return numbers.map(x => allNums / x)
}

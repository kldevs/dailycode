// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers){
  return numbers.filter(x => x === numbers[0]).length < numbers.filter(x => x !== numbers[0]).length ? numbers[0] : numbers.filter(x => x !== numbers[0])[0]
}
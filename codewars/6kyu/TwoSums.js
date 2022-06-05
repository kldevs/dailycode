// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length - 1; i++){
    for(let n = i + 1; n < numbers.length; n++){
      if(numbers[i] + numbers[n] === target)
        return [i, n]
    }
  }
}
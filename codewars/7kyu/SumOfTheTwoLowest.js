// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {
  const sortArr = numbers.sort((a,b) => a - b )
  return sortArr[0] + sortArr[1]
}
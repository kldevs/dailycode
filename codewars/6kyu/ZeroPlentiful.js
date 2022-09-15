// https://www.codewars.com/kata/59e270da7997cba3d3000041

function zeroPlentiful(arr) {
  zeroArr = arr.map(x => x > 9 ? 1 : x).join('').match(/0+/g) || []
  return zeroArr.every(x => x.length > 3) ? zeroArr.length : 0
}

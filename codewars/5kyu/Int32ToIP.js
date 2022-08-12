// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

function int32ToIp(int32) {
  return int32
  .toString(2)
  .padStart(32, '0')
  .match(/[10]{8}/g)
  .map(x => parseInt(x, 2))
  .join('.')
}

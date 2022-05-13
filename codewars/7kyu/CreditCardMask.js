// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  return cc.split('').fill('#', 0, -4).join('')
}
// https://www.codewars.com/kata/594c6ad5d909ca19e200002f

function byteToSet(byte){
  let byteStr = '0'.repeat(8 - byte.toString(2).length) + byte.toString(2)
  return new Set(byteStr.split('').map((x,i) => x === '1' ? i : null). filter(x=> x !== null))
}

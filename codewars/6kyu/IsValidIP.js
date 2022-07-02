// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

function isValidIP(str){
  const octets = str.split('.')
  return octets.length === 4 && octets.every(x => x >= 0 && x <= 255 && x === String(+x))
}

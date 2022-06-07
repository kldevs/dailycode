// https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function(morseCode){
  return morseCode.split('   ').map(x => x.split(' ').map(code => MORSE_CODE[code]).join('')).join(' ').trim()
}

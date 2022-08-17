// https://www.codewars.com/kata/5d50e3914861a500121e1958

function addLetters(...letters){
  result = [...letters].reduce((p, c) => p + (c.charCodeAt() - 96), 0) % 26
  return result === 0 ? 'z' : String.fromCharCode(result + 96)
}

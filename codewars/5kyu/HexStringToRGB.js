// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString){
  const rgb = hexString.match(/\w{2}/ig).map(x => parseInt(x, 16))
  return { r: rgb[0], g: rgb[1], b: rgb[2]}
}

// https://www.codewars.com/kata/5848565e273af816fb000449

function encryptThis(text){
  return text.split(' ')
  .map(x => x.length > 2 ? x[0] + x[x.length-1] + x.slice(2, -1) + x[1] : x)
  .map(x => x.charCodeAt(0) + x.slice(1))
  .join(' ')
}

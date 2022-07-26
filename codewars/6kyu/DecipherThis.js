// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str){
  return str
  .split(' ')
  .map(x => String.fromCharCode(x.match(/^\d+/)) + x.replace(/\d/g,'').replace(/(^.)([a-z]*)(.$)/, '$3$2$1'))
  .join(' ')
}

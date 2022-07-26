// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

function kebabize(str){
  return str.replace(/\d/g, '').replace(/(?<!^)([A-Z])/g, '-$1').toLowerCase()
}

// https://www.codewars.com/kata/53b2f6934a240823f4000abc

function uniquePush(arr, obj){
  return arr.some(x => x.phoneNumber === obj.phoneNumber) || !obj.phoneNumber ? false : (arr.push(obj), true)
}

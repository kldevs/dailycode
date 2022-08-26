// https://www.codewars.com/kata/55da6c52a94744b379000036

function sumFromString(str){
  return (str.match(/\d+/g) || []).reduce((p, c) => p + +c, 0)
}

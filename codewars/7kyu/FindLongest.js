// https://www.codewars.com/kata/58daa7617332e59593000006

function findLongest(array){
  return array.sort((a,b) => String(b).length - String(a).length)[0]
}

// https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(array1,array2){
  return array1.map(x => array2.some(y => y.includes(x)) ? x : null).filter((x,i,a) => x !== null && i === a.lastIndexOf(x)).sort()
}

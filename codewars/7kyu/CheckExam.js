// https://www.codewars.com/kata/5a3dd29055519e23ec000074

function checkExam(array1, array2) {
  let score = 0
  for(key in array1){
    score += array2[key] === "" ? 0 : 
    array2[key] === array1[key] ? 4 :
    -1
  }
  return Math.max(score, 0)
}

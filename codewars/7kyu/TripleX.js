// https://www.codewars.com/kata/568dc69683322417eb00002c

function tripleX(str){
  return ((str.match(/x+/) || [])[0] || []).length > 2
}

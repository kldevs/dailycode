// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr){
  return arr.sort((a,b) => arr.filter(x => x === b).length - arr.filter(x => x === a).length)[0]
}

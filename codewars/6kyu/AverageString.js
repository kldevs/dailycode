// https://www.codewars.com/kata/5966847f4025872c7d00015b

function averageString(str){
  mapNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  wordNums = str.split(' ')
  numsNums = wordNums.map(x => mapNums.indexOf(x))
  return str === "" || !wordNums.every(x => mapNums.includes(x)) ? "n/a" : mapNums[Math.floor(numsNums.reduce((p,c) => p + c, 0) / numsNums.length)]
}

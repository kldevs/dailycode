// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
  return string.split(" ").map(x => x.length >= 5 ? x.split("").reverse().join("") : x ).join(" ")
}

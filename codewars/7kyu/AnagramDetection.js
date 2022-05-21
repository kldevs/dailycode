// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

var isAnagram = function (test, original) {
  if(test.length === original.length){
    let t = test.split("").map(x => x.toLowerCase()).sort().join("")
    let o = original.split("").map(x => x.toLowerCase()).sort().join("")
    return t === o
  }
  return false
};
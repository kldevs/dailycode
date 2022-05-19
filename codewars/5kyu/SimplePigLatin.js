// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  let trans = str.split(" ")
  for(let i = 0; i < trans.length; i++){
    if(!(trans[i] === "!" || trans[i] === "?"))
      trans[i] = trans[i].substring(1) + trans[i].charAt(0) + "ay"
  }
  return trans.join(" ")
}
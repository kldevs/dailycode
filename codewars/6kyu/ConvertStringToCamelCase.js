// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str){
  if(str === "")
    return ""
  return str.replace(/[_-]/g, " ").split(" ").map( (x, i) => x = (i === 0 ? x[0] : x[0].toUpperCase()) + x.slice(1)).join("")
}
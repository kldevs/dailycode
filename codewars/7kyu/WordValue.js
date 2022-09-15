// https://www.codewars.com/kata/598d91785d4ce3ec4f000018

function wordValue(a){
  return a.map((x,i) => [...x].reduce((p,c) => c === " " ? p : p + (c.charCodeAt(0) - 96) * (i + 1), 0))
}

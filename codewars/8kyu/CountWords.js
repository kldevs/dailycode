// https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript

function countWords(str) {
  return str.replace(/\s/g, " ").split(" ").filter(word => word != "").length
}
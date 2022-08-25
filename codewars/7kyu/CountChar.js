// https://www.codewars.com/kata/577ad961ae2807182f000c29

function countChar(string, char){
  return (string.match(new RegExp(`${char}`, "gi")) || []).length
}

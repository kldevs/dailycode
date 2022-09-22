// https://www.codewars.com/kata/55caef80d691f65cb6000040

function geometricSequenceElements(a, r, n){
  return [...Array(n)].map((x,i) => a * r ** i).join(', ')
}

// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b){
  for(i of b)
      a = a.filter(x => x != i)
  return a
}
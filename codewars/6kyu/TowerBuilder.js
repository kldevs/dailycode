// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors){
  let arr = []
  for(let i = nFloors; i > 0; i--){
    arr.unshift(' '.repeat(nFloors - i) + '*'.repeat(2 * i - 1) + ' '.repeat(nFloors - i))
  }
  return arr
}
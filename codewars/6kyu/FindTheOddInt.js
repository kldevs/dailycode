// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {

  let values = {}

  A.forEach(x => {
    if(!values[x])
      values[x] = 0
    values[x]++
    })

  for(key in values){
    if(values[key] % 2 === 1){
      return +key
    }
  }
}

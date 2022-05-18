// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2){
  let x = {}
  res = []

  for (let i of s1.concat(s2)){
    if(x[i] === undefined)
      x[i] = 0
    x[i]++
  }

  for(key in x)
    res.push(key)
  
  return res.sort().join("")
}
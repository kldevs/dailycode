// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(str){
  let a = str.split("")
  for(let i = 0; i < a.length; i++){
    a[i] = a[i].toUpperCase() + a[i].toLowerCase().repeat(i)
  }
  return a.join("-")  
}
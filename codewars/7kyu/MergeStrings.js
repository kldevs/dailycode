// https://www.codewars.com/kata/61c78b57ee4be50035d28d42

function mergeStrings(first, second){
  for(i = 0; i <= first.length; i++){
    if(second.startsWith(first.slice(i))){
      return first.slice(0, i) + second
    }
  }
}

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

function maxSequence(arr){
  if(arr.every(x => x < 0)){
    return 0
  } else if (arr.every(x => x > 0)){
    return arr.reduce((s,x) => s + x, 0)
  }else{
    sublist = []
    for(i = 1; i <= arr.length; i++ ){   // length
      for(j = 0; j <= arr.length - i; j++){  // index
        sublist.push(arr.slice(j, j + i).reduce((s, x) => s + x, 0)) 
      }
    }
    return Math.max(...sublist)
  }
}

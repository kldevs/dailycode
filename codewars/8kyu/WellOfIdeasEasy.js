// https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x) {
  console.log(x.filter(idea => idea === 'good'))
  switch (x.filter(idea => idea === 'good').length){
    case 0: return 'Fail!'
    case 1: return 'Publish!'
    case 2: return 'Publish!'
    default : return 'I smell a series!'
  }
}
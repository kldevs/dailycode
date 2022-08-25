// https://www.codewars.com/kata/585b1fafe08bae9988000314

function explode(s){
  return [...s].map(x => x.repeat(+x)).join('')
}

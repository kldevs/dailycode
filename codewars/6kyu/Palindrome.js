// https://www.codewars.com/kata/53046ceefe87e4905e00072a

function palindrome(string){
  const pal = string.toLowerCase().match(/[a-z0-9]/ig) || []
  return pal.join('') === pal.reverse().join('')
}

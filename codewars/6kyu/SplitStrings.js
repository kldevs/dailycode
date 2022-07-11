// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str){
   return (str + '_').match(/.{2}/g) || []
}

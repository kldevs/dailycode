// https://www.codewars.com/kata/59098c39d8d24d12b6000020

function dot(n,m){
  let line = Array(n+1).fill('+').join('---')
  let dots = Array(n+1).fill('|').join(' o ')
  return Array(m+1).fill(line).join('\n'+dots+'\n')
}

// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers){
  let lines = input.split('\n')
  for(comm of markers)
    lines = lines.map((x, i, a) => x.indexOf(comm) < 0 ? x : x.slice(0, x.indexOf(comm)).trim() )
  return lines.join('\n')
}

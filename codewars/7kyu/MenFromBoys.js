// https://www.codewars.com/kata/5af15a37de4c7f223e00012d

function menFromBoys(arr){
  return Array.from(new Set([...arr.filter(x => x % 2 === 0).sort((a, b) => a - b), ...arr.filter(x => Math.abs(x % 2) === 1).sort((a, b) => b - a)]))
}

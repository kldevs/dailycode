// https://www.codewars.com/kata/58d76854024c72c3e20000de

function reverse(str) {
  return str.trim().split(' ').map((x, i, a) => i % 2 === 1 ? a[i].split('').reverse().join('') : x).join(' ')
}
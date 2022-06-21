// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num){
  return num.toString()
    .split('')
    .reverse()
    .map((x,i) => x === '0' ? -1 : `${x}${'0'.repeat(i)}` )
    .reverse()
    .filter(x => x !== -1)
    .join(' + ')
}

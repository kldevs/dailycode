// https://www.codewars.com/kata/569d488d61b812a0f7000015

function dataReverse(data){
  let bytes = data.join('').match(/[1|0]{8}/g)
  return (bytes || []) 
  .reverse()
  .flat()
  .join('')
  .split('').map(x => +x)
}

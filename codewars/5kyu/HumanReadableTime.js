// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds){
  let hrs = Math.floor(seconds / 3600)
  let min = Math.floor((seconds % 3600) / 60)
  let sec = Math.floor((seconds % 3600) % 60)
  return `${String(hrs).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}
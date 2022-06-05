// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  const arr = []

  let yrs = Math.floor(seconds / 31536000)
  let day = Math.floor((seconds % 31536000) / 86400)
  let hrs = Math.floor(((seconds % 31536000) % 86400) / 3600) 
  let min = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) 
  let sec = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60)

  yrs === 0 ? "" : arr.push(`${yrs} year${yrs > 1 ? "s" : ""}`)
  day === 0 ? "" : arr.push(`${day} day${day > 1 ? "s" : ""}`)
  hrs === 0 ? "" : arr.push(`${hrs} hour${hrs > 1 ? "s" : ""}`)
  min === 0 ? "" : arr.push(`${min} minute${min > 1 ? "s" : ""}`)
  sec === 0 ? "" : arr.push(`${sec} second${sec > 1 ? "s" : ""}`)

  switch(arr.length){
    case 0:
      return "now"
    case 1:
      return arr[0]
    case 2:
      return arr.join(" and ")
    default:
      arr.splice(-2, 2, arr.slice(-2).join(" and "))
      return arr.join(", ")
  }
}
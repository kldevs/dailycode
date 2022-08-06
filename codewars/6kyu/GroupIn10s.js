// https://www.codewars.com/kata/5694d22eb15d78fe8d00003a

function groupIn10s(...nums) {
  let grouped = Array(Math.ceil(Math.max(...nums, 0) / 10))

  nums.forEach(x => {
    if (!grouped[Math.floor(x / 10)])
      grouped[Math.floor(x / 10)] = []
    grouped[Math.floor(x / 10)].push(x)
  })

  grouped.forEach(x => x.sort())

  return grouped
}

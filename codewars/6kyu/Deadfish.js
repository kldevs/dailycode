// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

function parse(data) {
  let value = 0
  let output = []
  data.split('').forEach(x => {
    x === 'i' ? value += 1 :
    x === 'd' ? value -= 1 :
    x === 's' ? value **= 2 :
    x === 'o' ? output.push(value) : -1
  })
  return output
}

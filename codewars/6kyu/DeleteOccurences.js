// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr, n) {
  count = {}

  return arr.filter(x => {
    count[x] > -1 ? count[x]++ : count[x] = 0
    return (count[x] < n)
  })
}
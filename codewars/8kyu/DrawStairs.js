// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

function drawStairs(n) {
  const space = " "
  let result = "I"
  for (i = 1; i < n; i++)
    result += "\n" +space.repeat(i) + "I"
  return result
}
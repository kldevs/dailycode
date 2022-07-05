// https://www.codewars.com/kata/55ecd718f46fba02e5000029

function between(a, b){
  return [...Array(b - a + 1)].map((x, i) => i + a)
}

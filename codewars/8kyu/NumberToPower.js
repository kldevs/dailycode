// https://www.codewars.com/kata/562926c855ca9fdc4800005b

function numberToPower(number, power){
  return [...Array(power)].reduce((p,c) => p * number, 1)
}

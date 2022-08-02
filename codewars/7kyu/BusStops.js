// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
  return busStops.reduce((s, x) => x[0] - x[1] + (s < 0 ? 0 : s) , 0)
}

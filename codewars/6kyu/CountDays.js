// https://www.codewars.com/kata/5837fd7d44ff282acd000157

function countDays(d) {
  diffTime = Date.now() - Date.parse(d)
  return diffTime > 86400000 ? "The day is in the past!" :
    diffTime <= 0 ? `${Math.round(diffTime / -86400000)} days` :
      "Today is the day!"
}

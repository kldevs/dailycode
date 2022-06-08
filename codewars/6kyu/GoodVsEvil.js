// https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil) {
  let gTotal, eTotal = []
  const gWorth = [1, 2, 3, 3, 4, 10]
  const eWorth = [1, 2, 2, 2, 3, 5, 10]

  gTotal = good.split(' ').reduce((sum, x, i) => sum += x * gWorth[i], 0)
  eTotal = evil.split(' ').reduce((sum, x, i) => sum += x * eWorth[i], 0)

  return gTotal === eTotal ? "Battle Result: No victor on this battle field"
    : gTotal < eTotal ? "Battle Result: Evil eradicates all trace of Good"
    : "Battle Result: Good triumphs over Evil"
}
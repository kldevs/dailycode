// https://www.codewars.com/kata/5668e3800636a6cd6a000018

function ghostBusters(building) {
  return /\s/.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?";
}

// https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr) {
  return arr.reduce((p, c) => p + ( arr.filter(x => x === c).length === 1 ? c : 0), 0)
};

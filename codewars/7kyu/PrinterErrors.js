// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  return Array.isArray(s.match(/[^a-m]/g)) ? `${s.match(/[^a-m]/g).length}/${s.length}` : `0/${s.length}`
}

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
  return strarr === [] || k <= 0 || k > strarr.length ? "" : strarr.reduce((p, c, i, a) => p.length < a.slice(i, i + k).join('').length ? a.slice(i, i + k).join('') : p, "")
}

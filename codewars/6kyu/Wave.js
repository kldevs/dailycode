// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  return str === "" ? [] :
    [...str].map((x, i, a) => [...a.slice(0, i) , x.toUpperCase() , ...a.slice(i + 1)].join(''))
    .filter(x => x !== str)
}

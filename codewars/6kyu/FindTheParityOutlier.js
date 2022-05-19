// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  let oe = integers.map((x) => x % 2 === 0 ? "even" : "odd")
  return oe.filter((x) => x === "even").length < oe.filter((x) => x === "odd").length ? integers[oe.indexOf("even")] : integers[oe.indexOf("odd")]
}
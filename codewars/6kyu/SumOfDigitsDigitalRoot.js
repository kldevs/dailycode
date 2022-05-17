// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  n = n.toString().split("").reduce((sum, x) => sum + Number(x), 0)
  if (n.toString().length > 1)
    return digital_root(n)
  else
    return Number(n)
}
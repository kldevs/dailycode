// https://www.codewars.com/kata/582642b1083e12521f0000da

function arrayMash (array1, array2) {
  return array1.reduce((p,c,i) => [...p, array1[i], array2[i]], [])
}

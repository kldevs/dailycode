// https://www.codewars.com/kata/592e830e043b99888600002d

function encode(str, n) {
  const arrKey = n.toString().split('')
  return str.split('').map((x, i) => x.charCodeAt(0) - 96 + Number(arrKey[i % arrKey.length]))
}
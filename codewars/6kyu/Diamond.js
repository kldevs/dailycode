\\ https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n) {
  if (n < 0 || n % 2 === 0) {
    return null
  } else {

    let top = Array(Math.floor(n / 2)).fill('*')
      .map((x, i) => ' '.repeat(Math.floor(n / 2 - i)) + '*'.repeat(2 * i + 1) + '\n')
    let mid = ['*'.repeat(n) + '\n']
    let bot = top.slice(0).reverse()

    return top.concat(mid.concat(bot)).join('')
  }
}

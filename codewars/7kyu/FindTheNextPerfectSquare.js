// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  return (Math.floor(Math.sqrt(sq)) ** 2 % sq === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1)
}

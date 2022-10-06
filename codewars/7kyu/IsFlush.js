// https://www.codewars.com/kata/5acbc3b3481ebb23a400007d

function isFlush(cards){
  return cards.every(x => x.slice(-1) === cards[0].slice(-1))
}

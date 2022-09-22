// https://www.codewars.com/kata/5966f6343c0702d1dc00004c

function giveChange(amount){
  return [amount%100%50%20%10%5,
    ~~(amount%100%50%20%10/5),
    ~~(amount%100%50%20/10),
    ~~(amount%100%50/20),
    ~~(amount%100/50),
    ~~(amount/100)]
}

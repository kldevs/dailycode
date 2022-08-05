// https://www.codewars.com/kata/5571f712ddf00b54420000ee/solutions

function looseChange(cents){
  coins = { 'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0 }
  if(cents > 0){
    cents = Math.floor(cents)
    coins['Quarters'] = Math.floor(cents / 25)
    coins['Dimes'] = Math.floor((cents % 25) / 10)
    coins['Nickels'] = Math.floor((cents % 25 % 10) / 5)
    coins['Pennies'] = Math.floor(cents % 25 % 10 % 5)
  }
  return coins
}

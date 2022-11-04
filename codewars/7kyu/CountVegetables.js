// https://www.codewars.com/kata/56ff1667cc08cacf4b00171b

function countVegetables(string) {
  const veggies = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]
  const objVeggies = string.match(/\w+/g).filter(x => veggies.includes(x)).reduce((p,c) => {
    p[c] ? p[c]++ : p[c] = 1
    return p
  }, {})
  
  return Object.entries(objVeggies)
    .map(x => [x[1], x[0]])
    .sort((a, b) => b[0] === a[0] ? b[1].localeCompare(a[1]) : b[0] - a[0])
}

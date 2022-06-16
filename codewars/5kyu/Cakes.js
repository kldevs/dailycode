// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available){
let canMake = []

for(key in recipe)
  canMake.push( Math.floor(available[key] / recipe[key]) || 0)

console.log(canMake)
return Math.min(...canMake)
}

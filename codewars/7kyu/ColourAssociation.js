// https://www.codewars.com/kata/56d6b7e43e8186c228000637

function colourAssociation(array){
  return array.map(x => ({[x[0]] : x[1]}))
}

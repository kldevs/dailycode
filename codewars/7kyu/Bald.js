// https://www.codewars.com/kata/57efab9acba9daa4d1000b30

function bald(x){
  return ['-'.repeat(x.length), [`Clean!`, `Unicorn!`, `Homer!`, `Careless!`, `Careless!`, `Careless!`][(x.match(/\//g) || []).length] || 'Hobo!']
}

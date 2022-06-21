// https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name){
  return 'Hello, ' + (name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World') + '!'
}

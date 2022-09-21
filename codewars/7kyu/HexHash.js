// https://www.codewars.com/kata/5ab363ff6a176b29880000dd

function hexHash(code){
  return (code.replace(/./g, x => x.charCodeAt().toString(16)).match(/\d/g) || []).reduce((p,c) => p + +c, 0)
}

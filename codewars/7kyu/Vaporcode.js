// https://www.codewars.com/kata/5966eeb31b229e44eb00007a

function vaporcode(string){
  return [...string.toUpperCase()].filter(x => x !== ' ').join('  ')
}

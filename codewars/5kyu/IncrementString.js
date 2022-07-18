// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString(strng){
  return strng.replace(/[0-8]?9*$/, x => String(++x))
}

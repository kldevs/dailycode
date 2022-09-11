// https://www.codewars.com/kata/557af4c6169ac832300000ba

function removeRotten(bagOfFruits){
  return (bagOfFruits || []).map(x => x.replace(/rotten/, "").toLowerCase())
}

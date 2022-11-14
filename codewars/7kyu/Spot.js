// https://www.codewars.com/kata/5881460c780e0dd207000084

function spot(s1, s2){
  return [...s1].reduce((p,c,i) => c === s2[i] ? p : [...p, i], [])
}

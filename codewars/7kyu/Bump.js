// https://www.codewars.com/kata/57ed30dde7728215300005fa

function bump(x){
  return (x.match(/n/g) || []).length <= 15 ? "Woohoo!" : "Car Dead"
}

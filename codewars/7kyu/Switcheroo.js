// https://www.codewars.com/kata/57f759bb664021a30300007d

function switcheroo(x){
  return [...x]
    .map((y) => (y === "a" ? (y = "b") : y === "b" ? (y = "a") : y))
    .join("");
}

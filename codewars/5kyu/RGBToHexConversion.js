// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b){
  let color = [r, g, b].map(x => x = (x > 255 ? 255 : x < 0 ? 0 : x))
  return color.map(x => x.toString(16).padStart(2, '0')).join("").toUpperCase()
}
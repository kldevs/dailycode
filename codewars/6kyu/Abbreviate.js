// https://www.codewars.com/kata/5375f921003bf62192000746

function abbreviate(string){
  return string.match(/\w+|\W/gi).map(x => x.length >= 4 ? x[0] + `${x.length - 2}` + x[x.length - 1] : x).join('')
}

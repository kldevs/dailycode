// https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2

function direction(facing, turn){
  const dirList = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
  return dirList[(dirList.findIndex(x => x === facing) + (turn / 45) + 24) % 8]
}
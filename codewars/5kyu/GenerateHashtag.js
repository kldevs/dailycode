// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str){
  return str.trim() === "" ? false : 
    str.trim().split(" ").join('').length > 139 ? false :
    "#" + str.trim().toLowerCase().split(' ').map(x => x[0] ? x[0].toUpperCase() + x.slice(1) : x).join('')
}

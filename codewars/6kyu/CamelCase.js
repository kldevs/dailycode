// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase=function(){
  return this.length === 0 ? "" : this.trim().split(' ').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join('')
}

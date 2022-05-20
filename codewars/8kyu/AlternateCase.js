// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

String.prototype.toAlternatingCase = function () {
  let altStr = ""
  for (i = 0; i < this.length; i++) {
    altStr += this[i] === this[i].toUpperCase() ? this[i].toLowerCase() : this[i].toUpperCase()
  }
  return altStr
}
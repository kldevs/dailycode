// https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function() {
  return this.map(x => x ** 2)
}

Array.prototype.cube = function() {
  return this.map(x => x ** 3)
}

Array.prototype.average = function() {
  return this.length > 1 ? this.reduce((s,x) => s + x, 0) / this.length : NaN
}

Array.prototype.sum = function() {
  return this.reduce((s, x) => s + x, 0)
}

Array.prototype.even = function() {
  return this.filter(x => x % 2 === 0)
}

Array.prototype.odd = function() {
  return this.filter(x => x % 2 === 1)
}

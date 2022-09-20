// https://www.codewars.com/kata/53b2ff49b82af296ce001139

Array.prototype.reverse = function() {
  let temp = this.splice(0)
  for (x of temp)
    this.unshift(x)
  return this
};

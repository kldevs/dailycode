// https://www.codewars.com/kata/539ee3b6757843632d00026b

var capitals = function (word) {
	return word.split('').map((x,i) => x === x.toUpperCase() ? i : null).filter(x => x !== null)
};
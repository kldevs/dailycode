// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder=function(iterable){
  return [...iterable].filter((x, i) => x !== iterable[i-1])
}

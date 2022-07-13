// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
  return triplet.map((x,i)=> [x, i]).sort((a,b) => a[0] - b[0])[1][1]
}

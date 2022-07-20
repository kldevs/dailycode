// https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n){
  return (Math.round([...Array(n)].map((x,i) => 1 / ((3 * i) + 1)).reduce((s,x) => s += x, 0) * 100) / 100).toFixed(2)
}

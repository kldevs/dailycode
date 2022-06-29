// https://www.codewars.com/kata/5815f7e789063238b30001aa

function redistributeWealth(wealth) {
  void wealth.fill( wealth.reduce((sum, x) => sum += x, 0) / wealth.length);
}

// https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x) {
  return x.reduce((p, c) => typeof (c) === "string" ? p - +c : p + c, 0)
}

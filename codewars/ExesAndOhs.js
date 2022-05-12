// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    const strL = str.toLowerCase().split("")
    return strL.reduce((a, b) => a + (b === "x" ? 1 : 0), 0) === strL.reduce((c, d) => c + (d === "o" ? 1 : 0), 0)
}
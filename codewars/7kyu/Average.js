// https://www.codewars.com/kata/57b68bc7b69bfc8209000307

function average(scores) {
    return Math.round(scores.reduce((p,c) => p + c, 0) / scores.length)
}

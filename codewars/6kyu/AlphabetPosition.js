// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  return text.toUpperCase().split('').map(x => x.charCodeAt(0) - 64).filter(x => x > 0 && x < 27).join(' ')
}

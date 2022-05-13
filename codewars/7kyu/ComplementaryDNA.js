// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  return dna.split('').map(x => 
    x === 'A' ? 'T' :
    x === 'T' ? 'A' :
    x === 'C' ? 'G' :
    'C'
  ).join('')
}
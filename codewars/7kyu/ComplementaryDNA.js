// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  const pairs = {'A':'T','T':'A','C':'G','G':'C'}
  return dna.split('').map(x => pairs[x]).join('')
}
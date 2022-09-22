// https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef

function getSectionIdFromScroll(scrollY, sizes){
  return sizes.findIndex(x => (scrollY -= x) < 0)
}

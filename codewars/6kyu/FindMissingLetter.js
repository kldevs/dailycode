// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array){
  let codeMap = array.map(x => x.charCodeAt())
  for(let i = 0; i < codeMap.length - 1; i++){
    if(codeMap[i] + 1!== codeMap[i + 1])
      return String.fromCharCode(codeMap[i] + 1)
  }
}
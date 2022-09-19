// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531

function dotCalculator(equation){
  const arr = equation.split(' ')
  switch(arr[1]){
    case '+': return '.'.repeat(arr[0].length + arr[2].length)
    case '-': return '.'.repeat(arr[0].length - arr[2].length)
    case '*': return '.'.repeat(arr[0].length * arr[2].length) 
    case '//': return '.'.repeat(arr[0].length / arr[2].length)
  }
}

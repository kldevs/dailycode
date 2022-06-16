// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n){
  let till = Array(n).fill(0)

  customers.forEach(customer => {
      till[till.indexOf(Math.min(...till))] += customer
  })
  return Math.max(...till)
}

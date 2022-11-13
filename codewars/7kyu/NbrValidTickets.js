// https://www.codewars.com/kata/564717d6e94d5d6b21000066

function nbrValidTickets(tickets){
 return tickets.reduce((p,c) => /^[a-z][0-9][a-z]{4}$/i.test(c) ? p + 1 : p, 0)
}

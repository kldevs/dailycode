// https://www.codewars.com/kata/5650ab06d11d675371000003

  const re = new RegExp(`.{1,${partLength}}`, "g")
  return s.match(re).join(' ')

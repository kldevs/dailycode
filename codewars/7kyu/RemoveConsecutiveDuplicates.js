// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

const removeConsecutiveDuplicates = s => s.split(' ').reduce((p,c) => p.slice(-1) != c ? [...p, c] : [...p], []).join(' ')

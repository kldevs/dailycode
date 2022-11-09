// https://www.codewars.com/kata/57a93f93bb9944516d0000c1

class Dictionary {
  constructor() {
    // your code
  }
  
  newEntry(key, value) {
    this[key] = value
  }
  
  look(key) {
    return this[key] || `Can\'t find entry for ${key}`
  }
}

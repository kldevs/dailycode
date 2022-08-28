// https://www.codewars.com/kata/597c684822bc9388f600010f

class Dinglemouse{

  constructor( firstName, lastName ){
    this.fName = firstName
    this.lName = lastName
  }
  
  getFullName(){
    return `${this.fName} ${this.lName}`.trim()
  }
  
}

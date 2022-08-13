// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let sum = 0, seq = "0"
    for (i = 1; i <= count; i++){
      sum += i
      seq += `+${i}`
    }
    return count < 0 ? `${count}<0` : count === 0 ? `0=0` : `${seq} = ${sum}`
  };

  return SequenceSum;

})();

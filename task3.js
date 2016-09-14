var numbers = [1, 2, 3, 4, 5];

Array.prototype.map2 = function(callbackFunction){
  var results = [];
  for(var i = 0; i < this.length; i++){
    results.push(callbackFunction(this[i]));
  }
  return results;
};

var numbersDoubled = numbers.map2(function(number) {
  return number*2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]
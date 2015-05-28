var roman = function(number) {
  var numeral1 = "I";
  var outputArray = [];
  if (number <= 3) {
    for (var index = 1; index <= number; index +=1) {
      outputArray.push(numeral1);
    }
    var finalOutput = outputArray.join('');
  }
  return finalOutput;
}

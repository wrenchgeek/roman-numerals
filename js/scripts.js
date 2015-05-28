var roman = function(number) {
  var numeral1 = "I";
  var numeral5 = "V";
  var outputArray = [];
  var remainder = number

  if ((remainder / 5 < 1) && (remainder % 5 === 4)) {
    outputArray.push(numeral1, numeral5);
    remainder -=4
  }



  if (remainder <= 3) {
    for (var index = 1; index <= remainder; index +=1) {
      outputArray.push(numeral1);
    }

  }
  var finalOutput = outputArray.join('');
  return finalOutput;
}

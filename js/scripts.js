var roman = function(number) {
  var numeral1 = "I";
  var numeral5 = "V";
  var numeral10 = "X";
  var numeral50 = "L";
  var numeral100 = "C";
  var outputArray = [];
  var remainder = number;


  if ((remainder / 100 < 1) && (remainder % 100 >= 90) && (remainder % 100 <= 99)) {
      outputArray.push(numeral10, numeral100);
      remainder -= 90;
  }



  if (remainder / 50 >= 1) {
    outputArray.push(numeral50);
    remainder -= 50;
  }

  if ((remainder / 50 < 1) && (40 <= remainder % 50) && (remainder % 50 <= 49)) {
    outputArray.push(numeral10, numeral50);
    remainder -=40;
  }

  if (remainder / 10 >= 1) {
    var tens = Math.floor(remainder / 10);
    for (var index = 1; index <= tens; index += 1) {
      outputArray.push(numeral10);
      remainder -= 10;
    }
  }

  if ((remainder / 10 < 1) && (remainder % 10 === 9)) {
    outputArray.push(numeral1, numeral10);
    remainder -= 10;
  }

  if (remainder / 5 >= 1) {
    outputArray.push(numeral5);
    remainder -= 5;
  }

  if ((remainder / 5 < 1) && (remainder % 5 === 4)) {
    outputArray.push(numeral1, numeral5);
    remainder -=5;
  }


  if (remainder <= 3) {
    for (var index = 1; index <= remainder; index +=1) {
      outputArray.push(numeral1);
    }
  }

  var finalOutput = outputArray.join('');
  return finalOutput;
}

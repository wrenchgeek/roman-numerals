var roman = function(number) {
  var numeral1 = "I";
  var numeral5 = "V";
  var numeral10 = "X";
  var numeral50 = "L";
  var numeral100 = "C";
  var numeral500 = "D";
  var numeral1000 = "M";
  var outputArray = [];
  var remainder = number;

  if (number > 3999) {
    return "Romans could not count that high"
  }

  if (remainder /1000 >= 1) {
    var thousands = Math.floor(remainder / 1000);
    for (var index = 1; index <= thousands; index += 1) {
      outputArray.push(numeral1000);
      remainder -= 1000;
    }
  }

  if ((remainder / 1000 < 1) && (remainder % 1000 >= 900) && (remainder % 1000 <= 999)) {
    outputArray.push(numeral100, numeral1000);
    remainder -= 900;
  }

  if (remainder / 500 >= 1) {
    outputArray.push(numeral500);
    remainder -= 500;
  }

  if ((remainder / 500 < 1) && (400 <= remainder % 500) && (remainder % 50 <= 499)) {
    outputArray.push(numeral100, numeral500);
    remainder -=400;
  }

  if (remainder /100 >= 1) {
    var hundreds = Math.floor(remainder / 100);
    for (var index = 1; index <= hundreds; index += 1) {
    outputArray.push(numeral100);
    remainder -= 100;
    }
  }

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

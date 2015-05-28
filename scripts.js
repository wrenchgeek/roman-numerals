var count = function(counter, total) {
  var finalArray = [];
  for (var index = counter; index <= total; index+=counter) {
    finalArray.push(index);
  }
  return finalArray
};

$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    var counter = parseInt($("input#counter").val());
    var total = parseInt($("input#total").val());
    var result = count(counter, total);

    $(".output").text(result);

    $("#result").show();
    event.preventDefault();
  });
});

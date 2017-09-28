/*
C013:嫌いな数字
https://paiza.jp/challenges/46/ready
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
  input_string += chunk;
});

process.stdin.on('end', function() {
  var lines = input_string.split('\n');

  var ngNumber = lines[0];
  var roomLength = lines[1]

  var foundFlug = false
  for (var i = 0; i < roomLength; i++) {
    var roomnumber = lines[i + 2] + "";
    if (roomnumber.indexOf(ngNumber) == -1) {
      foundFlug = true
      console.log(roomnumber)
    }
  }
  if (!foundFlug) {
    console.log("none")
  }

});
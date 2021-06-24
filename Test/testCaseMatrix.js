function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var count = 0;
  for (var a = 1; a < newInput.length; a = a + count + 1) {
    count = Number(newInput[a]);
    var n = count;
    var matrix = [];
    for (var b = 0; b < n; b++) {
      var row = newInput[a + b + 1].split(" ").map(Number);
      matrix.push(row);
    }

    console.log(matrix);
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
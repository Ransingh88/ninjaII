function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var OneDim = newInput.slice(0,).map(function (row) {
    return row.split(" ").map(Number);
  })
  row = OneDim.length
  var dig1 = 0;
  var dig2 = 0;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < row; j++){
      if (i == j) {
        dig1 += OneDim[i][j]
        //console.log(OneDim[i][j])
      }
      if (i + j == row - 1) {
        dig2 += OneDim[i][j]
      }
    }
  }
 
console.log(dig2-dig1)
}




input =
`1 2 3
4 5 6
0 8 9`
runProgram(input);
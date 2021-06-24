function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
    var arr = newInput.slice(0,).map(function (row) {
        return row.split(" ").map(Number);
    });
    var row = arr.length;
    var col = arr[0].length;
    var newArr = [];
    for (var i = 0; i < col; i++){
        newArr[i] = []
    }
    for (var i = 0; i < row; i++){
        for (var j = 0; j < col; j++){
            newArr[j][i] = arr[i][j]
        }
    }
    for (var i = 0; i < newArr.length; i++){
        var res = "";
        for (var j = 0; j < newArr[0].length; j++) {
            res += newArr[i][j] + " ";
        }
        console.log(res)
    }
}




input =
`1 2 3
4 5 6
7 8 9
1 2 3`
runProgram(input);

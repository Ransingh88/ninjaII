function sudokuValidate(board) {
    var isUsedInRow = new Array(9).fill(0).map(_ => new Array());
    var isUsedInCol = new Array(9).fill(0).map(_ => new Array());
    var isUsedInSub = new Array(9).fill(0).map(_ => new Array());

    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            var num = board[i][j];
            if (num === ".") {
                continue;
            }
            var subBoxIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3;
            if (isUsedInRow[i][num] || isUsedInCol[j][num] || isUsedInSub[subBoxIndex][num]) {
                return false
            }
            isUsedInRow[i][num] = true;
            isUsedInCol[j][num] = true;
            isUsedInSub[subBoxIndex][num] = true;
        }
    }
    return true
};

var board = `[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]`
var res = sudokuValidate(board);
if (res == true) {
    console.log("CORRECT");
} else {
    console.log("WRONG")
}
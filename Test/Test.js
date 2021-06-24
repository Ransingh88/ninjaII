function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var length = newInput[0].split(" ").map(Number);
  var n = length[0];
  var m = length[1];
  var k = length[2];
  var data = newInput[1].split(" ").map(Number);
  var layer = data.length/n;
  /* Write your code here */
  var half1 = [];
  var half2 = [];
  for(var i=0;i<layer;i++){
  		half1.push(data[i]);
  }
  for(var i=layer;i<data.length;i++){
  		half2.push(data[i]);
  }
  var arr2d1 = [];
  var arr2d2 = [];
  while(half1.length > 0) {
	arr2d1.push(half1.splice(0,k));
}
    while(half2.length > 0) {
	arr2d2.push(half2.splice(0,k));
}
  var arr3d = [];
  arr3d.push(arr2d1,arr2d2)
    
    for(var i=0;i<n;i++){
    	for(var j=0;j<m;j++){
          var res = "";
        	for(var l=0;l<k;l++){
            	res+=arr3d[i][j][l] + " ";
            }
          console.log(res)
        }
    }
  //console.log(n,m,k)
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
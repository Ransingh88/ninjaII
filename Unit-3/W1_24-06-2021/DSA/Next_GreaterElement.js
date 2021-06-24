/*
Next Greater Element
Description

Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding


Input
The first line contains T, the number of test cases.

The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

Constraints

1 <= T <= 10

1 <= N <= 10^5

0 <= A[i] <= 10000


Output
For each test case, print N space separated integers, denoting the next greater element for each element,  on a new line.


Sample Input 1 

1
4
1 3 2 4
Sample Output 1

3 4 4 -1
Hint

In the sample test case, the array contains 4 elements, and for the first element, the next greater element will be 3, similarly for the next element, the next greater element will be 4, and for the third element as well, the next greater element will be 4. Since, the last element has no elements ahead of it, the next greater element will be -1.
*/

function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var t = Number(newInput[0]);
  
  for(let a=1;a<=t;a++){
    let n = Number(newInput[a*2-1])
    let data = newInput[a*2].split(" ").map(Number);
    let res=''
      
    
    for(let i=0;i<n;i++){
      count=0
    	for(let j=i+1;j<=n;j++){
        	if(data[j] > data[i]){
            	res+=data[j] + ' ';
                break;
            }else{
            count++
            }
          
          if(count == n-i-1){
          	res+=-1 + ' '
          }
          
        }
      if(i==n-1){
      	res+=-1
      }
    }
    
    
    console.log(res)
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
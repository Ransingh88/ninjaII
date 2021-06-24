function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var length = Number(newInput[0]);
  for(var a=1;a<=length;a++){
  var n = Number(newInput[a]);
    var isPrime = true;
    var result = 0;
    for(var i=2;i<=n;i++){
    	isPrime = true;
      for(var j=2;j<=i/2;j++){
      		if(i%j == 0){
            	isPrime = false;
                break;
            }
      }
      if(isPrime)
      {
      	result+=i;
      }
    }
    console.log(result);
  }
}
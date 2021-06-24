var isPrime = true;
var n = 7;
//i**2<=n---->(i<=root(n))
for (var i = 2; i <= n - 1;i++){
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime")
}
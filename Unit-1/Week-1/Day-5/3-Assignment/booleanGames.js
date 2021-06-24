//Games of Boolean

//Part-1 (Result: false)
console.log("Not Possible")

//Part-2 (Result: true)
console.log(true || true && false || true);
console.log(true || true && false || false);
console.log(false || true && false || true);

//Part-3 (Result: false)
console.log("Not Possible");

//Part-4 (Result: true)
console.log(false && true || true || false && false);
console.log(false && true || true || true && false);

//Part-5 (Result: false)
console.log(false || false || false && true || false);
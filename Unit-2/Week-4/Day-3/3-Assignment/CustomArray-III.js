



// var arr = new MyArray(5,6,7,8,9,0)
// console.log(arr)

function MyArray() {
    this.length = arguments.length
    for (let i = 0; i < this.length; i++){
        this[i] = arguments[i]
    }
};
//pushing
Array.prototype.pushing = function (num) {
    let index = this.length
    this[index] = num;
}
//reverse
Array.prototype.reverse = function () {
    let rev = new Array();
    for (let i = this.length-1; i >= 0; i--){
        rev.push(this[i])
    }
    return rev
}
//printing array
Array.prototype.printArray = function () {
    let c= ''
    for (let i = 0; i < this.length; i++){
        c+=this[i] + ', '
    }
    console.log('[',c,']')
}


//first element
Array.prototype.firstElement = function () {
   return ('firstElement:',this[0])
}

const arr1 = new Array(5,6,8,9)
// arr1.pushing(9);
// arr1.pushing(90);
// arr1.pushing(100);
arr1.pushing(60);
console.log('arr1: ', arr1);

arr1.reverse();
console.log('arr1: ', arr1.reverse());
var x = arr1.firstElement();
console.log('arr1: ', x);

arr1.printArray()





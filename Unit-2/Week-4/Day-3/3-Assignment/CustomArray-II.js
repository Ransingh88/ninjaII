



var arr = new MyArray(5,6,7,8,9,0)
console.log(arr)


function MyArray() {
    this.length = arguments.length
    for (let i = 0; i < this.length; i++){
        this[i] = arguments[i]
    }
}





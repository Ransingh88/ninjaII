



var arr = new MyArray(1, 2, 3, 4)
console.log(arr)


function MyArray() {
    this.length = arguments.length
    for (let i = 0; i < this.length; i++){
        this[i] = arguments[i]
    }
}





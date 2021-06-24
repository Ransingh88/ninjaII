var num = {
    data: [1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems: function (a) {
        var arr = [];
        for (var i = 0; i < this.data.length; i++){
            if (this.data[i] < a) {
                arr.push(this.data[i])
            }
        }
        return arr;
    },
    greaterThanItems: function (a) {
        var arr = [];
        for (var i = 0; i < this.data.length; i++){
            if (this.data[i] > a) {
                arr.push(this.data[i]);
            }
        }
        return arr;
        
    },
};

less = 4;
big = 6;

var lesser = num.lessThanItems(less);
var greater = num.greaterThanItems(big);
console.log(lesser);
console.log(greater);
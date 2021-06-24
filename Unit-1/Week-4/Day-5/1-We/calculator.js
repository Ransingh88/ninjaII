var calc = {
    a: 20,
    b: 8,
    
    addition: function () {
        console.log(this.a + this.b);
    },
    subtraction: function () {
        console.log(this.a - this.b);
    },
    division: function () {
        if (this.b != 0) {
            console.log(this.a / this.b);
        } else {
            console.log(-1)
        }
    },
    multiplication: function (){
        console.log(this.a * this.b)
},
};
calc.addition();
calc.subtraction();
calc.multiplication();
calc.division();
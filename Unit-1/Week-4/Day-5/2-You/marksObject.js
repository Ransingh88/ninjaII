var marks = {
    name: {
        Nrupul: [10],
        Prateek: [20],
        Aman: [30],
        Albert: [5],
        Yogesh: [15],
    },
    average: function () {
        var avg = 0;
        var count = 0
        for (k in this.name) {
            avg += this.name[k][0];
            count++
        }
        console.log(avg/count);
    },
    minimum: function () {
        var arr = []
        var arr1 = []
        for (key in this.name) {
            arr.push(this.name[key][0]);
            arr1.push(key);

        }
        var min = arr[0];
        var name = "";
            for (var i = 1; i <= arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                    name = arr1[i]
            }
        }
        console.log(name,min);
    },
    maximum: function () {
        var arr = []
        var arr1 = []
        for (key in this.name) {
            arr.push(this.name[key][0]);
            arr1.push(key);

        }
        var max = arr[0];
        var name = "";
            for (var i = 1; i <= arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    name = arr1[i]
            }
        }
        console.log(name,max);
    }
};

marks.average();
marks.minimum();
marks.maximum();
function copy(data) {

    if (Array.isArray(data)) { // checking is the data is array or not -----> if true then this block of statement will execute
        var array = [];        // creating a empty array for coping
        for (i in data) {      //looping the data and pushing to the new empty array
            array.push(data[i])
        }
        return array           //returning the array
    }
    else {                    //-----> if the data checking value will false then this block of code will execute.
        var obj = {}          // creating an empty array to copy.
        for (i in data) {     // looping through data for coping
            obj[i]=data[i];
        }
        return obj           //returning the object.
    }
}

var a = [1, 2, 3, 4, 5, 6]  //original array
var b = { a: 'gggggg', b: 'aaaaa' }  // original object
c['a'] = 'school'
//var x = copy(a); //invoking the function copy()
//x[0] = 55        // changing the value of array
//x['a'] = 'hygjhgjh' // changing the value of object
console.log(b, c)


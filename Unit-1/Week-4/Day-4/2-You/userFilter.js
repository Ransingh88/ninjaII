var user = [
    {name: "Nrupul", age: 32},
    {name: "Prateek" , age: 29},
    {name: "Aman" , age: 26},
    {name: "Albert" , age: 28},
    {name: "Yogesh" , age: 44},
]

var arr = user.filter(function (item) {
    return item.age > 30;
});

for (var i = 0; i < arr.length; i++){
    console.log(arr[i].name)
}
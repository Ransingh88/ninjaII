var user = {
    Nrupul : ["cmd", "python", "sql"],
    Prateek: ["js", "html"],
    Aman: ["ds", "algo"],
    Albert: ["js", "react"],

}

for (key in user) {
    var arr = user[key];
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == "js")
            console.log(key);
    }
}
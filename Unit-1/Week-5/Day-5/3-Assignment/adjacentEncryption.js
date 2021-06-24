var s = "zyfqwxaeiou";
var res = "";
for (var i = 0; i < s.length; i++) {

    if (s[i] == "z") {
        res += "a";
    } else {
        var r = s.charCodeAt(i);
        res += String.fromCharCode(r+1);
    }
}
console.log(res);
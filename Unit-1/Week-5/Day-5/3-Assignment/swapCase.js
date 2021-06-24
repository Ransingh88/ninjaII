var s = "MiXeD";
var res = "";
for (var i = 0; i < s.length; i++) {
  if (s.charCodeAt(i) >= 65 && s.codePointAt(i) <= 90) {
    res += s[i].toLowerCase();
  } else if (s.charCodeAt(i) >= 97 && s.codePointAt(i) <= 122) {
    res += s[i].toUpperCase();
  }
}
console.log(res);
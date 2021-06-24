var data = {
    item: "Firefox",
    vowelsCount: function () {
        var count = 0
        for (var i = 0; i < this.item.length; i++) {
            var s = this.item.toLowerCase();
            if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
                count++;
            }
        }
        console.log(count);
    },
    reverse: function () {
        var arr = this.item.split("");
        var res = arr.reverse();
        console.log(res.join(""));
    },
    changeCase: function () {
        var s = this.item;
        var res = "";
        for (var i = 0; i < s.length; i++){
            if (s[i] != s[i].toLowerCase()) {
                res += s[i].toLowerCase();
            } else {
                res+=s[i].toUpperCase();
            }

        }
        console.log(res);
    }

};

data.vowelsCount();
data.reverse();
data.changeCase();
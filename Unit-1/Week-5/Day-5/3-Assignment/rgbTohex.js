function RGBToHex(arr) {
  r = arr[0].toString(16);
  g = arr[1].toString(16);
  b = arr[2].toString(16);
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return (r + g + b);
}
var arr = [12, 24, 36];
var res = RGBToHex(arr)
console.log(res);
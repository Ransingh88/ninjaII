/*
Compound Interest
(compounded annualy)

compoundInterest = P(1 + (R /100))**T

where, 
P = principal amount
R = Rate
T = Time
*/

var p = 100000; //this is principal amount
var r = 5; //this is rate of interest
var t = 8; //this is time
var CI = p*(1 + (r /100))**t; //this is compound interst

console.log(CI);
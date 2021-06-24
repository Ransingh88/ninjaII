var sides = 4;

if (sides == 3){
    console.log("Triangle");
}
else if (sides == 4){
    console.log("Quarilateral")
} 
else if (sides == 5){
    console.log("Pentagon")
}
else if (sides == 6){
    console.log("Hexagon")
}
else if (sides == 7){
    console.log("Septagon")
}
else if (sides == 8){
    console.log("Octagon")
}
else if (sides == 9){
    console.log("Nonagon")
}
else if (sides == 10){
    console.log("Decagon")
}
else if (sides > 11){
    console.log("The number of sides is greater than or equal to 11")
}
else {
    console.log("The polygon is not possible")
}
let a = 6;
let b = 12;
let c = 13;
let smallest;
let largest;

if (a <= b && a <= c){
    smallest = a
}
else if (b <= a && b <= c){
    smallest = b
}
else{
    smallest = c
}
console.log(smallest)



if (a >= b && a >= c){
    largest = a
}
else if (b >= a && b >= c){
    largest = b
}
else{
    largest = c
}
console.log(largest)


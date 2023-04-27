"use strict"

let currenthour = 8;
let greetings;

if (currenthour <= 10){
    greetings = "Good morning!";
}
else if (currenthour <= 16){
    greetings = "Good day!";
}
else if (currenthour <= 23){
     greetings = "Good evening!";

}

console.log(greetings);
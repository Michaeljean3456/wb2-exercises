"use strict";
console.log ("indexjs loaded");
const greeting = document.getElementById("greeting")
const nameField = document.getElementById("nameField")
const greetBtn = document.getElementById("greetBtn")

function init(){
    console.log("init executing")

    greetBtn.onclick = onGreetUserBtnClicked;
}

window.onload = init; 

function onGreetUserBtnClicked(){

    let user = nameField.value;

    greeting.innerHTML = `Hello ${user}`;

}

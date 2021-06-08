"use strict";

let menu = document.getElementById("menu");
console.log(menu)

let active = document.getElementsByClassName("active");
console.log(active)
//active.forEach(element => console.log(element))

let headline = document.querySelectorAll('h1')
headline.forEach(listToLog)

let paragraph = document.querySelectorAll('p')
paragraph.forEach(listToLog)

function listToLog(item){
    console.log(item)
}
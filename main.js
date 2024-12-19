"use strict";

let temperature = prompt("What is the temperature?");
let f = (temperature * 9) / 5 + 32;

alert(`temperature is ${f}`);

let age = prompt("What is your age");
age = Number(age);
if (age <= 17) {
  alert("You are under age");
} else if (age >= 18 && age < 30) {
  alert("You are an adult");
} else if (age >= 31) {
  alert("You are a senior citizen");
}

console.log("Welcome to site");

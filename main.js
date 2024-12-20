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

let firstuserinput = prompt("enter number here");
let seconduserinput = prompt("enter number here");
let operation = prompt("operation =");
if (operation === "-") {
  let result = Number(firstuserinput) - Number(seconduserinput);
  alert("subtract" + result);
} else if (operation === "+") {
  let result = Number(firstuserinput) + Number(seconduserinput);
  alert("add" + result);
} else if (operation === "/") {
  let result = Number(firstuserinput) + Number(seconduserinput);
  alert("divide" + result);
} else if (operation === "*") {
  let result = Number(firstuserinput) + Number(seconduserinput);
  alert("multiply" + result);
} else {
  alert("invalid response");
}

"use strict";

function smallestOf3Nums(a, b, c) {
  if (a < b && a < c) {
    alert(a + "is the smallest");
  } else if (b < a && b < c) {
    alert(b + "is the smallest");
  } else if (c < a && c < b) {
    alert(c + "is the smallest");
  }
}

smallestOf3Nums(32, 17, 45);

function negativePositiveOrZero(number) {
  if (number > 0) {
    alert("Positive");
  } else if (number === "0") {
    alert("Zero");
  } else if (number < 0) {
    alert("Negative");
  }
}

let user = +prompt("Pick a number");
negativePositiveOrZero(user);

function voterAge(age) {
  if (age >= 18) {
    alert("You are old enough to vote!");
  } else {
    alert("You are not old enough to vote!");
  }
}

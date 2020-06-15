"use strict";
let array = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let week = document.querySelector(".week");

let date = new Date();
let today = array.filter((item, index) => index + 1 === date.getDay());

function viewDays() {
  array.forEach((item) => {
    let dayEl = document.createElement("p");
    dayEl.textContent = item;
    week.appendChild(dayEl);
    if (item === "Saturday" || item === "Sunday") {
      dayEl.style.fontStyle = "italic";
    }
    if (item === today[0]) {
      dayEl.style.fontWeight = "bold";
    }
  });
}

viewDays();

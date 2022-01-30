"use strict";
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
  "@",
  ",",
  ".",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "!",
  "#",
  "$",
  "^",
  "&",
  "*",
  "<",
  ">",
  "%",
  "/",
];
const included = [];
const length = 25;
const result = document.getElementById("result");
const generate = document.getElementById("generate");
const settings = document.getElementById("settings");
settings.addEventListener("click", function (e) {
  if (!e.target.closest("input")) return;
  const element = e.target;
  const id = e.target.id;
 if (id === "includeNumbers") {
    if (element.checked === true) insertArray(numbers);
    else removeArray(numbers);
  }
  if (id === "includeSymbols") {
    if (element.checked === true) insertArray(symbols);
    else removeArray(symbols);
  }
  if (id === "includeUpperCase") {
    if (element.checked === true) insertArray(upperCaseLetters);
    else removeArray(upperCaseLetters);
  }
  if (id === "includeLowerCase") {
    if (element.checked === true) insertArray(lowerCaseLetters);
    else removeArray(lowerCaseLetters);
  }
});
generate.addEventListener("click", function () {
  result.textContent = "";
for (let i = 1; i <= length; i++) {
    const randomCategory =
      included[Math.floor(Math.random() * included.length)];
    const randomChar =
      randomCategory[Math.floor(Math.random() * randomCategory.length)];
    result.textContent += randomChar;
  }
});
function insertArray(arr) {
  included.push(arr);
}
function removeArray(arr) {
  included.splice(included.indexOf(arr), 1);
}

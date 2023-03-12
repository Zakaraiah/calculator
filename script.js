let inputEl = document.getElementById("user-input");

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getAnimations("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("sixth");
let seventh = document.getAnimations("seven");
let eigth = document.getElementById("eight");
let ninth = document.getElementById("nine");
let zero = document.getElementById("zero");

first.onclick = function () {
  inputEl.value = first.textContent;
};

second.onclick = function () {
  inputEl.value = second.textContent;
};

let plus = document.getElementById("plus");

plus.onclick = function () {};

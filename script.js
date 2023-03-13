let newNum = [];

plus.onclick = function () {
  newNum.push(parseInt(user.value));
  user.value = "";
};

minus.onclick = function () {
  newNum.push(parseInt(user.value));
  user.value = "";
};

equalTo.onclick = function (zackk) {
  let secondIn = user.value;
  newNum.push(parseInt(user.value));

  let addition = newNum[0] + newNum[1];
  user.value = addition;
  newNum = [];
};

clear.onclick = function () {
  user.value = "";
};

let main = document.getElementById("main");
on.onclick = function () {
  main.classList.remove("close");
};

off.onclick = function () {
  main.classList.add("close");
};

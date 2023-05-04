const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnMultiply = document.getElementById("multiply");
const btnDivide = document.getElementById("divide");
const btnPower = document.getElementById("power");
const txt = document.getElementById("count-txt");
let count = 0;

btnIncrease.addEventListener("click", increase);
btnDecrease.addEventListener("click", decrease);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);
btnPower.addEventListener("click", power);
btnReset.addEventListener("click", reset);

function changeColor() {
  if (count > 0) {
    txt.style.color = "var(--increase)";
  } else if (count < 0) {
    txt.style.color = "var(--decrease)";
  } else {
    txt.style.color = "var(--reset)";
  }
}

function increase() {
  count++;
  txt.innerHTML = count;
  changeColor();
}

function decrease() {
  count--;
  txt.innerHTML = count;
  changeColor();
}

function multiply() {
  count = count * 2;
  txt.innerHTML = count;
  changeColor();
}
function power() {
  count = count ** 2;
  txt.innerHTML = count;
  changeColor();
}

function divide() {
  count = count / 2;
  txt.innerHTML = count;
  changeColor();
}
function reset() {
  count = 0;
  txt.innerHTML = count;
  changeColor();
}

import "../sass/index.scss";
const spans = document.querySelectorAll(".spans");
const ball = document.querySelector(".ball");
const body = document.querySelector("body");
const btn0 = document.querySelector(".key0");
const btn1 = document.querySelector(".key1");
const btn2 = document.querySelector(".key2");
const btn3 = document.querySelector(".key3");
const btn4 = document.querySelector(".key4");
const btn5 = document.querySelector(".key5");
const btn6 = document.querySelector(".key6");
const btn7 = document.querySelector(".key7");
const btn8 = document.querySelector(".key8");
const btn9 = document.querySelector(".key9");
const btnMult = document.querySelector(".keyx");
const btnDiv = document.querySelector(".keydiv");
const btnAdd = document.querySelector(".keyplus");
const btnSubs = document.querySelector(".keysubs");
const btnDel = document.querySelector(".keydel");
const btnReset = document.querySelector(".keyreset");
const btnEq = document.querySelector(".keyeq");
const btnDot = document.querySelector(".keydot");
const numbers = document.querySelectorAll(".keynumber");
const operators = document.querySelectorAll(".ops");
const screen = document.querySelector(".screen");
let numberToUse = "";
let result = [];

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const currentNumber = number.innerHTML;
    screen.innerHTML += currentNumber;
    numberToUse += currentNumber;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    let currentoperator;
    let lastOperator;
    const lastchar = screen.innerHTML[screen.innerHTML.length - 1];
    if (lastchar >= 0 && lastchar <= 9) {
      currentoperator = operator.innerHTML;
      if (!screen.innerHTML == "") numberToUse = screen.innerHTML;
      screen.innerHTML += currentoperator;
      result.push(numberToUse);
      result.push(currentoperator);
      numberToUse = "";
    }
  });
});

btnReset.addEventListener("click", () => {
  screen.innerHTML = "";
  result.length = 0;
  numberToUse = "";
});
btnDel.addEventListener("click", () => {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
});

btnEq.addEventListener("click", () => {
  result.push(numberToUse);
  screen.innerHTML = eval(result.join(""));
  result.length = 0;
  numberToUse = "";
});

spans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("first")) {
      if (ball.classList.contains("middle")) ball.classList.remove("middle");
      if (ball.classList.contains("right")) ball.classList.remove("right");
      ball.classList.add("left");
      body.classList.remove("theme-two");
      body.classList.remove("theme-three");
      body.classList.add("theme-one");
    }
    if (e.target.classList.contains("second")) {
      if (ball.classList.contains("left")) ball.classList.remove("left");
      if (ball.classList.contains("right")) ball.classList.remove("right");
      ball.classList.add("middle");
      body.classList.remove("theme-one");
      body.classList.remove("theme-three");
      body.classList.add("theme-two");
    }
    if (e.target.classList.contains("third")) {
      if (ball.classList.contains("left")) ball.classList.remove("left");
      if (ball.classList.contains("middle")) ball.classList.remove("middle");
      ball.classList.add("right");
      body.classList.remove("theme-one");
      body.classList.remove("theme-two");
      body.classList.add("theme-three");
    }
  });
});

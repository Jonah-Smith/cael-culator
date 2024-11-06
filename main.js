//const playButton = document.getElementById("audio");

//numbers
const zeroButton = document.getElementById("number0");
const oneButton = document.getElementById("number1");
const twoButton = document.getElementById("number2");
const threeButton = document.getElementById("number3");
const fourButton = document.getElementById("number4");
const fiveButton = document.getElementById("number5");
const sixButton = document.getElementById("number6");
const sevenButton = document.getElementById("number7");
const eightButton = document.getElementById("number8");
const nineButton = document.getElementById("number9");

//operators
const multiplyButton = document.getElementById("operatorMultiply");
const squareButton = document.getElementById("operatorSquare");
const rootButton = document.getElementById("operatorRoot");
const equalButton = document.getElementById("equals");
const pointButton = document.getElementById("point");
const clearButton = document.getElementById("clear");
const plusButton = document.getElementById("operatorAdd");
const minusButton = document.getElementById("operatorSubtract");
const divideButton = document.getElementById("operatorDivide");
const negatizeButton = document.getElementById("operatorPlusMinus");

//other
const display = document.getElementById("display");

// const sound = new Audio("test.mp3");

// playButton.addEventListener("click", () => {
//   sound.play();
// });

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";

clearButton.addEventListener("click", () => {
  display.value = "";
});

//numbers
zeroButton.addEventListener("click", () => {
  firstNumber += 0;
  display.value += "0";
});

oneButton.addEventListener("click", () => {
  if (currentOperator.value) {
    secondNumber = "1";
  } else {
    firstNumber = "1";
  }

  // firstNumber += 1;
  // display.value += "1";
});

twoButton.addEventListener("click", () => {
  firstNumber += 2;
  display.value += "2";
});

threeButton.addEventListener("click", () => {
  firstNumber += 3;
  display.value += "3";
});

fourButton.addEventListener("click", () => {
  firstNumber += 4;
  display.value += "4";
});

fiveButton.addEventListener("click", () => {
  firstNumber += 5;
  display.value += "5";
});

sixButton.addEventListener("click", () => {
  firstNumber += 6;
  display.value += "6";
});

sevenButton.addEventListener("click", () => {
  firstNumber += 7;
  display.value += "7";
});

eightButton.addEventListener("click", () => {
  firstNumber += 8;
  display.value += "8";
});

nineButton.addEventListener("click", () => {
  firstNumber += 9;
  display.value += "9";
});

//operators

plusButton.addEventListener("click", () => {
  currentOperator = "+";
  display.value += "+";
});
minusButton.addEventListener("click", () => {
  currentOperator = "-";
  display.value += "-";
});
divideButton.addEventListener("click", () => {
  currentOperator = "÷";
  display.value += "÷";
});
multiplyButton.addEventListener("click", () => {
  currentOperator = "×";
  display.value += "×";
});
squareButton.addEventListener("click", () => {
  currentOperator = "²";
  display.value += "²";
});
rootButton.addEventListener("click", () => {
  currentOperator = "√";
  display.value += "√";
});
pointButton.addEventListener("click", () => {
  currentOperator = ".";
  display.value += ".";
});
negatizeButton.addEventListener("click", () => {
  currentOperator = "±";
  display.value += "±";
});
equalButton.addEventListener("click", () => {
  currentOperator = "=";
  display.value += "=";
});

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

let currentNumberString = "";
let secondNumber = "";
let savedNumber = 0;
let currentOperator = "";
let expectingNewNumber = false;

clearButton.addEventListener("click", () => {
  currentNumberString = "";
  expectingNewNumber = false;
  saveNumber = 0;
  currentOperator = 0;
  updateDisplay();
});

function appendDigit(digit) {
  if (expectingNewNumber) {
    currentNumberString = "";
    expectingNewNumber = false;
  }

  currentNumberString += digit;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentNumberString;
}

//numbers
zeroButton.addEventListener("click", () => {
  appendDigit("0");
});

oneButton.addEventListener("click", () => {
  appendDigit("1");
});

twoButton.addEventListener("click", () => {
  appendDigit("2");
});

threeButton.addEventListener("click", () => {
  appendDigit("3");
});

fourButton.addEventListener("click", () => {
  appendDigit("4");
});

fiveButton.addEventListener("click", () => {
  appendDigit("5");
});

sixButton.addEventListener("click", () => {
  appendDigit("6");
});

sevenButton.addEventListener("click", () => {
  appendDigit("7");
});

eightButton.addEventListener("click", () => {
  appendDigit("8");
});

nineButton.addEventListener("click", () => {
  appendDigit("9");
});

//operators

plusButton.addEventListener("click", () => {
  currentOperator = "+";
  expectingNewNumber = true;
  //convert the firstNumber from a string to a number
  savedNumber = Number.parseFloat(currentNumberString);
});
minusButton.addEventListener("click", () => {
  currentOperator = "-";
  expectingNewNumber = true;
  //convert the firstNumber from a string to a number
  savedNumber = Number.parseFloat(currentNumberString);
});
divideButton.addEventListener("click", () => {
  currentOperator = "÷";
  expectingNewNumber = true;
  //convert the firstNumber from a string to a number
  savedNumber = Number.parseFloat(currentNumberString);
});
multiplyButton.addEventListener("click", () => {
  currentOperator = "×";
  expectingNewNumber = true;
  //convert the firstNumber from a string to a number
  savedNumber = Number.parseFloat(currentNumberString);
});
squareButton.addEventListener("click", () => {
  const number = Number.parseFloat(currentNumberString);

  // do the math
  const result = number * number;

  //convert back to string
  currentNumberString = result.toString();

  updateDisplay();
});
rootButton.addEventListener("click", () => {
  const number = Number.parseFloat(currentNumberString);

  // do the math
  const result = Math.sqrt(number);

  //convert back to string
  currentNumberString = result.toString();

  updateDisplay();
});
pointButton.addEventListener("click", () => {
  currentOperator = ".";
  display.value += ".";
});

negatizeButton.addEventListener("click", () => {
  //convert the firstNumber from a string to a number
  const number = Number.parseFloat(currentNumberString);

  // do the math
  const result = number * -1;

  //convert back to string
  currentNumberString = result.toString();

  updateDisplay();
});

//equal
equalButton.addEventListener("click", () => {
  const number = Number.parseFloat(currentNumberString);
  let result;

  if (currentOperator === "+") {
    result = savedNumber + number;
  }

  if (currentOperator === "-") {
    result = savedNumber - number;
  }

  if (currentOperator === "×") {
    result = savedNumber * number;
  }

  if (currentOperator === "÷") {
    result = savedNumber / number;
  }

  console.log(result);
  currentNumberString = result.toString();
  console.log(currentNumberString);
  updateDisplay();
});

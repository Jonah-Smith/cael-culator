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
const previousExpression = document.getElementById("previousExpression");

const sound = new Audio("test.mp3");

const soundFiles = [sound, sound, sound, sound];

// playButton.addEventListener("click", () => {
//   sound.play();
// });

let currentExpressionDisplay = "";
let currentExpressionCode = "";
//let result = "";

function playRandomSound() {
  const randomIndex = Math.floor(Math.random() * soundFiles.length);
  soundFiles[randomIndex].play();
}

clearButton.addEventListener("click", () => {
  currentExpressionCode = "";
  currentExpressionDisplay = "";
  previousExpression.value = "";

  updateDisplay();
});

function appendDigit(digit) {
  currentExpressionCode += digit;
  currentExpressionDisplay += digit;

  updateDisplay();
}

function updateDisplay() {
  display.value = currentExpressionDisplay;
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
  currentExpressionCode += "+";
  currentExpressionDisplay += " + ";
  updateDisplay();
});
minusButton.addEventListener("click", () => {
  currentExpressionCode += "-";
  currentExpressionDisplay += " - ";
  updateDisplay();
});
divideButton.addEventListener("click", () => {
  currentExpressionCode += "/";
  currentExpressionDisplay += " ÷ ";
  updateDisplay();
});
multiplyButton.addEventListener("click", () => {
  currentExpressionCode += "*";
  currentExpressionDisplay += " × ";
  updateDisplay();
});
squareButton.addEventListener("click", () => {
  currentExpressionDisplay += "²";
  currentExpressionCode += "";
  updateDisplay();
});
rootButton.addEventListener("click", () => {
  currentExpressionDisplay += "√";
  currentExpressionCode += "";
  updateDisplay();
});
pointButton.addEventListener("click", () => {
  appendDigit(".");
});

negatizeButton.addEventListener("click", () => {
  currentExpressionDisplay += "-";
  currentExpressionCode += "-";
  updateDisplay();
  playRandomSound();
});

//equal
equalButton.addEventListener("click", () => {
  const result = eval(currentExpressionCode);

  display.value = result;
  previousExpression.value = currentExpressionDisplay;

  currentExpressionCode = result;
  currentExpressionDisplay = result;
});

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

const sound = new Audio("nochance.mp3");

const soundFiles = [sound, sound, sound, sound];

const digitSoundProbability = 0.3;
const operatorSoundProbability = 0.4;
const equalSoundProbability = 0.2;

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

function playAtRandomTime() {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  }
}

function playOperatorAtRandomTime() {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  }
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
  playAtRandomTime();
});

twoButton.addEventListener("click", () => {
  appendDigit("2");
  playAtRandomTime();
});

threeButton.addEventListener("click", () => {
  appendDigit("3");
  playAtRandomTime();
});

fourButton.addEventListener("click", () => {
  appendDigit("4");
  playAtRandomTime();
});

fiveButton.addEventListener("click", () => {
  appendDigit("5");
  playAtRandomTime();
});

sixButton.addEventListener("click", () => {
  appendDigit("6");
  playAtRandomTime();
});

sevenButton.addEventListener("click", () => {
  appendDigit("7");
  playAtRandomTime();
});

eightButton.addEventListener("click", () => {
  appendDigit("8");
  playAtRandomTime();
});

nineButton.addEventListener("click", () => {
  appendDigit("9");
  playAtRandomTime();
});

//operators

plusButton.addEventListener("click", () => {
  currentExpressionCode += "+";
  currentExpressionDisplay += " + ";
  updateDisplay();
  playOperatorAtRandomTime();
});
minusButton.addEventListener("click", () => {
  currentExpressionCode += "-";
  currentExpressionDisplay += " - ";
  updateDisplay();
  playOperatorAtRandomTime();
});
divideButton.addEventListener("click", () => {
  currentExpressionCode += "/";
  currentExpressionDisplay += " ÷ ";
  updateDisplay();
  playOperatorAtRandomTime();
});
multiplyButton.addEventListener("click", () => {
  currentExpressionCode += "*";
  currentExpressionDisplay += " × ";
  updateDisplay();
  playOperatorAtRandomTime();
});
squareButton.addEventListener("click", () => {
  const numbers = currentExpressionCode.split(/[\+\-\*\/]/);

  let lastNumber = numbers[numbers.length - 1];
  //delete last number from currentExpressionCode
  currentExpressionCode = currentExpressionCode.slice(
    0,
    currentExpressionCode.length - lastNumber.length
  );

  //append (lastNumber * lastNumber) to currentExpressionCOde
  const result = lastNumber * lastNumber;
  currentExpressionCode += `${result}`;

  currentExpressionDisplay += "²";
  updateDisplay();
  playOperatorAtRandomTime();
});
rootButton.addEventListener("click", () => {
  //4+5 -9
  //4+5-Math.sqrt(Math.sqrt())

  const numbers = currentExpressionCode.split(/[\+\-\*\/]/);

  let lastNumber = numbers[numbers.length - 1];
  //delete last number from currentExpressionCode
  currentExpressionCode = currentExpressionCode.slice(
    0,
    currentExpressionCode.length - lastNumber.length
  );

  //append (lastNumber * lastNumber) to currentExpressionCOde
  const result = Math.sqrt(lastNumber);
  currentExpressionCode += `${result}`;

  currentExpressionDisplay += "√";
  updateDisplay();
  playOperatorAtRandomTime();
});
pointButton.addEventListener("click", () => {
  appendDigit(".");
  playOperatorAtRandomTime();
});

negatizeButton.addEventListener("click", () => {
  currentExpressionDisplay += "-";
  currentExpressionCode += "-";
  updateDisplay();
  playOperatorAtRandomTime();
});

//equal
equalButton.addEventListener("click", () => {
  const result = eval(currentExpressionCode);

  display.value = result;
  previousExpression.value = currentExpressionDisplay;

  currentExpressionCode = result;
  currentExpressionDisplay = result;
  function playEqualAtRandomTime() {
    if (Math.random() <= equalSoundProbability) {
      playRandomSound();
    }
  }
});

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

const sound = new Audio("sounds/nochance.mp3");
const sound2 = new Audio("sounds/cantletyoudothat1.mp3");
const sound3 = new Audio("sounds/nahbro1.mp3");
const sound4 = new Audio("sounds/nicetry1.mp3");
const sound5 = new Audio("sounds/nocando1.mp3");
const sound6 = new Audio("sounds/sorrybud1.mp3");
const sound7 = new Audio("sounds/uhuh1.mp3");

const soundFiles = [sound, sound2, sound3, sound4, sound5, sound6, sound7];

const digitSoundProbability = 0.4;
const operatorSoundProbability = 0.2;
const equalSoundProbability = 0.2;

let currentExpressionDisplay = "";
let currentExpressionCode = "";
//let result = "";

function playRandomSound() {
  const randomIndex = Math.floor(Math.random() * soundFiles.length);
  soundFiles[randomIndex].play();
}

function digitPressed(digit) {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode += digit;
    currentExpressionDisplay += digit;
    updateDisplay();
  }
}

function updateDisplay() {
  display.value = currentExpressionDisplay;
}

//numbers
zeroButton.addEventListener("click", () => {
  digitPressed("0");
});

oneButton.addEventListener("click", () => {
  digitPressed("1");
});

twoButton.addEventListener("click", () => {
  digitPressed("2");
});

threeButton.addEventListener("click", () => {
  digitPressed("3");
});

fourButton.addEventListener("click", () => {
  digitPressed("4");
});

fiveButton.addEventListener("click", () => {
  digitPressed("5");
});

sixButton.addEventListener("click", () => {
  digitPressed("6");
});

sevenButton.addEventListener("click", () => {
  digitPressed("7");
});

eightButton.addEventListener("click", () => {
  digitPressed("8");
});

nineButton.addEventListener("click", () => {
  digitPressed("9");
});

//operators

plusButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode += "+";
    currentExpressionDisplay += " + ";
    updateDisplay();
  }
});
minusButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode += "-";
    currentExpressionDisplay += " - ";
    updateDisplay();
  }
});
divideButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode += "/";
    currentExpressionDisplay += " ÷ ";
    updateDisplay();
  }
});
multiplyButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode += "*";
    currentExpressionDisplay += " × ";
    updateDisplay();
  }
});
squareButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
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
  }
});
rootButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    const numbers = currentExpressionCode.split(/[\+\-\*\/]/);

    let lastNumber = numbers[numbers.length - 1];
    //delete last number from currentExpressionCode
    currentExpressionCode = currentExpressionCode.slice(
      0,
      currentExpressionCode.length - lastNumber.length
    );

    currentExpressionDisplay = currentExpressionDisplay.slice(
      0,
      currentExpressionDisplay.length - lastNumber.length
    );

    //append (lastNumber * lastNumber) to currentExpressionCOde
    const result = Math.sqrt(lastNumber);
    currentExpressionCode += `${result}`;

    currentExpressionDisplay += `√${lastNumber}`;
    updateDisplay();
  }
});
pointButton.addEventListener("click", () => {
  digitPressed("0");
});

negatizeButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    if (currentExpressionDisplay) {
      const numbers = currentExpressionCode.split(/[\+\-\*\/]/);

      let lastNumber = numbers[numbers.length - 1];
      //delete last number from currentExpressionCode
      currentExpressionCode = currentExpressionCode.slice(
        0,
        currentExpressionCode.length - lastNumber.length
      );

      currentExpressionDisplay = currentExpressionDisplay.slice(
        0,
        currentExpressionDisplay.length - lastNumber.length
      );

      //append (lastNumber * lastNumber) to currentExpressionCOde
      const result = lastNumber * -1;
      currentExpressionCode += `${result}`;

      currentExpressionDisplay += `-${lastNumber}`;
      updateDisplay();
    } else {
      currentExpressionDisplay = "";
    }
  }
});

//equal
equalButton.addEventListener("click", () => {
  if (Math.random() <= equalSoundProbability) {
    playRandomSound();
  } else {
    const result = eval(currentExpressionCode);

    display.value = result;
    previousExpression.value = currentExpressionDisplay;

    currentExpressionCode = result;
    currentExpressionDisplay = result;
  }
});

clearButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode = "";
    currentExpressionDisplay = "";
    previousExpression.value = "";

    updateDisplay();
  }
});

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
const sound2 = new Audio("cantletyoudothat1.mp3");
const sound3 = new Audio("nahbro1.mp3");
const sound4 = new Audio("nicetry1.mp3");
const sound5 = new Audio("nocando1.mp3");
const sound6 = new Audio("sorrybud1.mp3");
const sound7 = new Audio("uhuh1.mp3");

const soundFiles = [sound, sound2, sound3, sound4, sound5, sound6, sound7];

const digitSoundProbability = 0.4;
const operatorSoundProbability = 0.2;
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

// function playAtRandomTime() {
//   if (Math.random() <= digitSoundProbability) {
//     playRandomSound();
//   }
// }

// function playOperatorAtRandomTime() {
//   if (Math.random() <= operatorSoundProbability) {
//     playRandomSound();
//   }
// }

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
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("0");
  }
  // appendDigit("0");
  // playAtRandomTime();
});

oneButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("1");
  }
  // appendDigit("1");
  // playAtRandomTime();
});

twoButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("2");
  }
  // appendDigit("2");
  // playAtRandomTime();
});

threeButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("3");
  }
  // appendDigit("3");
  // playAtRandomTime();
});

fourButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("4");
  }
  // appendDigit("4");
  // playAtRandomTime();
});

fiveButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("5");
  }
  // appendDigit("5");
  // playAtRandomTime();
});

sixButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("6");
  }
  // appendDigit("6");
  // playAtRandomTime();
});

sevenButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("7");
  }
  // appendDigit("7");
  // playAtRandomTime();
});

eightButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("8");
  }
  // appendDigit("8");
  // playAtRandomTime();
});

nineButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit("9");
  }
  // appendDigit("9");
  // playAtRandomTime();
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
  // currentExpressionCode += "+";
  // currentExpressionDisplay += " + ";
  // updateDisplay();
  // playOperatorAtRandomTime();
});
minusButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode += "-";
    currentExpressionDisplay += " - ";
    updateDisplay();
  }
  // currentExpressionCode += "-";
  // currentExpressionDisplay += " - ";
  // updateDisplay();
  // playOperatorAtRandomTime();
});
divideButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode += "/";
    currentExpressionDisplay += " ÷ ";
    updateDisplay();
  }
  // currentExpressionCode += "/";
  // currentExpressionDisplay += " ÷ ";
  // updateDisplay();
  // playOperatorAtRandomTime();
});
multiplyButton.addEventListener("click", () => {
  if (Math.random() <= operatorSoundProbability) {
    playRandomSound();
  } else {
    currentExpressionCode += "*";
    currentExpressionDisplay += " × ";
    updateDisplay();
  }
  // currentExpressionCode += "*";
  // currentExpressionDisplay += " × ";
  // updateDisplay();
  // playOperatorAtRandomTime();
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
  // const numbers = currentExpressionCode.split(/[\+\-\*\/]/);

  // let lastNumber = numbers[numbers.length - 1];
  // //delete last number from currentExpressionCode
  // currentExpressionCode = currentExpressionCode.slice(
  //   0,
  //   currentExpressionCode.length - lastNumber.length
  // );

  // //append (lastNumber * lastNumber) to currentExpressionCOde
  // const result = lastNumber * lastNumber;
  // currentExpressionCode += `${result}`;

  // currentExpressionDisplay += "²";
  // updateDisplay();
  // playOperatorAtRandomTime();
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

  // const numbers = currentExpressionCode.split(/[\+\-\*\/]/);

  // let lastNumber = numbers[numbers.length - 1];
  // //delete last number from currentExpressionCode
  // currentExpressionCode = currentExpressionCode.slice(
  //   0,
  //   currentExpressionCode.length - lastNumber.length
  // );

  // currentExpressionDisplay = currentExpressionDisplay.slice(
  //   0,
  //   currentExpressionDisplay.length - lastNumber.length
  // );

  // //append (lastNumber * lastNumber) to currentExpressionCOde
  // const result = Math.sqrt(lastNumber);
  // currentExpressionCode += `${result}`;

  // currentExpressionDisplay += `√${lastNumber}`;
  // updateDisplay();
  // playOperatorAtRandomTime();
});
pointButton.addEventListener("click", () => {
  if (Math.random() <= digitSoundProbability) {
    playRandomSound();
  } else {
    appendDigit(".");
  }
  // appendDigit(".");
  // playOperatorAtRandomTime();
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
      // currentExpressionCode += "*(-1)";
      // currentExpressionDisplay += "-";
      // updateDisplay();
    } else {
      currentExpressionDisplay = "";
    }
  }
  // currentExpressionDisplay += "-";
  // currentExpressionCode += "-";
  // updateDisplay();
  // playOperatorAtRandomTime();
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
    // function playEqualAtRandomTime() {
    //   if (Math.random() <= equalSoundProbability) {
    //     playRandomSound();
    //   }
    // }
  }

  // const result = eval(currentExpressionCode);

  // display.value = result;
  // previousExpression.value = currentExpressionDisplay;

  // currentExpressionCode = result;
  // currentExpressionDisplay = result;
  // function playEqualAtRandomTime() {
  //   if (Math.random() <= equalSoundProbability) {
  //     playRandomSound();
  //   }
  // }
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
  // currentExpressionCode = "";
  // currentExpressionDisplay = "";
  // previousExpression.value = "";

  // updateDisplay();
  // playOperatorAtRandomTime();
});

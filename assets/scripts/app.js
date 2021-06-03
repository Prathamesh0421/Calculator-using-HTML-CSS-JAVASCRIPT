let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function calculateResult(calcultationType) {
  if (
    calcultationType !== "ADD" &&
    calcultationType !== "SUBTRACT" &&
    calcultationType !== "MULTIPLY" &&
    calcultationType !== "DIVIDE"
  ) {
    return;
  }
  
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calcultationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calcultationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calcultationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calcultationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calcultationType, initialResult, enteredNumber, currentResult);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function clearOutput() {
  const initialResult = currentResult;
  currentResult = defaultResult;
  createAndWriteLog("", "", "");
  writeToLog("CLEAR", initialResult, null, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clearOutput);

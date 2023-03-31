/* SCRIPTS MY BOIIII */


const displayMain = document.querySelector(".display");
const displaySmall = document.querySelector(".display-small");
const numBtns = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".btn-equal");


// Add click events for buttons

numBtns.forEach(button => {
	button.addEventListener('click', (event) => displayMain.textContent 
			+= button.textContent);
});

operatorBtns.forEach(button => {
    button.addEventListener('click', (event) => {
    const lastCharBool = handleOperator();
        if (lastCharBool) displayMain.textContent += button.textContent;
    });
});

equalBtn.addEventListener('click', (event) => {
    // function to check the display text, return operator
    // function to return numbers in display text
    // switch case, depending on the operator, to call arthimetic functions.
    calculate();
});


// functions to handle exceptions

function handleOperator() {
	const lastChar = displayMain.textContent[
			displayMain.textContent.length -1];
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" ||
        lastChar === "/" || lastChar === "%" || lastChar === ".") {
            return false;
        } else {
            return true;
        };
};

// functions for calculate function

function calculate() {
    const operator = checkForOperator();
    const intArray = getIntArray(operator);
    switch (operator) {
        case "+":
            addNumbers(intArray);
            break;
        case "-":
            subtractNumbers(intArray);
            break;
        case "*":
            multiplyNumbers(intArray);
            break;
        case "/":
            divideNumbers(intArray);
            break;
        case "%":
            percentageNumbers(intArray);
            break;
    };
}

function checkForOperator() {
    let equation = displayMain.textContent;
    for (let i = 0; i < equation.length - 1; i++) {
		if (equation[i] === '+' || equation[i] === '-' || equation[i] === '*'
			|| equation[i] === '/' || equation[i] === "%") return equation[i];
    };
    return null;
};

function getIntArray(operator) {
    const equArray = displayMain.textContent.split(operator);
    const intArray = equArray.map((numberString) => {
        return Number(numberString)
    });
    return intArray;
};

// Arithmetic operation functions

function addNumbers(intArray) {
    console.log(intArray[0] + intArray[1]);
};

function subtractNumbers(intArray) {
	console.log(intArray[0] - intArray[1];
};
    
function mulyiplyNumbers(intArray) {
	console.log(intArray[0] * intArray[1];
};

function divideNumbers(intArray) {
	console.log(intArray[0] / intArray[1];
};


// to do 
// add sum to display
// when added to dispay, clear funciton to clear display before hand
// finsish other arthimetic functions
// finish exceptions
//     - apply calculate function when second operator is added to string
//     - if an operator already exists in the string, calculate, then add to
//     string
//
//


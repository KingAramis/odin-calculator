/* SCRIPTS MY BOIIII */


const displayMain = document.querySelector(".display");
const displaySmall = document.querySelector(".display-small");
const numBtns = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".btn-equal");


// Add click events for buttons

numBtns.forEach(button => {
    button.addEventListener('click', (event) => displayMain.textContent += button.textContent);
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
    const operator = checkForOperator();
    console.log(operator);

});


// functions to handle exceptions

function handleOperator() {
    const lastChar = displayMain.textContent[displayMain.textContent.length - 1];
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
    switch (operator) {
        case "+":
            addNumbers(a, b);
            break;
        case "-":
            substractNumbers(a, b);
            break;
        case "*":
            multiplyNumbers(a, b);
            break;
        case "/":
            divideNumbers(a, b);
            break;
        case "%":
            percentageNumbers(a, b);
            break;
    };
}

function checkForOperator() {
    let equation = displayMain.textContent;
    for (let i = 0; i < equation.length - 1; i++) {
        if (equation[i] === '+' || equation[i] === '-' || equation[i] === '*' ||
            equation[i] === '/' || equation[i] === "%") return equation[i];
    };
    return null;
};

// Arithmetic operation functions

function addNumbers() {

}

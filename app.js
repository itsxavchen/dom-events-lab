/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let firstNumber
let secondNumber
let step = 0
let operation
let result = 0
let firstNumArray = []
let secondNumArray = []
let totalDisplay = document.querySelector('.display') //get the selecte element



/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');


/*-------------------------------- Functions --------------------------------*/

function getnumber (num) {
    if (step ===0 || step === 1) {
        firstNumArray.push(num)
        step = 1
        firstNumber = Number(firstNumArray.join(''))
        totalDisplay.innerHTML = firstNumber
    } else if (step === 2) {
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        totalDisplay.innerHTML = firstNumber + ' ' + operation + secondNumber
    }
 }

 function getOperator (operatorSign) {
    step = 2
    operation = operatorSign.innerHTML
    totalDisplay.innerHTML = firstNumber + ' ' + operation;
    // operation = operatorSign.innerHTML


 }

 function clearDisplay () {
    totalDisplay.innerHTML = 0
    firstNumber = null;
    secondNumber = null;
    step = 0
    operation = null;
    result = 0;
    firstNumArray = []
    secondNumArray = []
 }

function calculateEquals () {
    if (operation === '+') {
        result = firstNumber + secondNumber
        totalDisplay.innerHTML = result
    } else if (operation === '-') {
        result = firstNumber - secondNumber
        totalDisplay.innerHTML = result
    } else if (operation === '*') {
        result = firstNumber * secondNumber
        totalDisplay.innerHTML = result
    } else if (operation === '/') {
        result = firstNumber / secondNumber
        totalDisplay.innerHTML = result
    }
}

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach (function (button) {
    button.addEventListener('click', function (event) {
        if (event.target.classList.contains('number')) {
            getnumber(event.target.innerHTML);
        }

        if (event.target.classList.contains('operator')) {
            getOperator(event.target);
        }

        if (event.target.classList.contains('equal')) {
            calculateEquals(event.target);
        }

        if (event.target.classList.contains('clear')) {
            clearDisplay(event.target);
        }

    })
})


/*-------------------------------- Variables --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
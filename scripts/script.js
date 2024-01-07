const display = document.querySelector('.display');
let num1;
let num2;
let result;
let operator = '';
display.value = '';

function operandFunction(input){
    if (display.value.length < 10) {
        display.value += input;
        if (num1 === undefined || operator === '') {
            num1 = (num1 !== undefined ? num1.toString() : '') + input;
            num1 = parseFloat(num1);
        } else {
            num2 = (num2 !== undefined ? num2.toString() : '') + input;
            num2 = parseFloat(num2);
        }
    }
}



function operatorFunction(input){
    if(num2 !== undefined){
        operate();
    }
    operator = input;
    display.value += input;
    num2 = undefined; // Reset num2 for the next operand
}



function clearDisplay(){
    display.value = '';
}

function allClear(){
    display.value = '';
    num1 = undefined;
    num2 = undefined;
    operator = '';
}

function operate() {
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Error!";
            break;
    }
    result = result.toString();
    if (result.length > 10) {
        result = result.substring(0, 10);
    }
    display.value = result;
    num1 = result; // Storing the result for further operations
    num2 = undefined;
}

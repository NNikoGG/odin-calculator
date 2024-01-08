const display = document.querySelector('.display');
let num1;
let num2;
let result;
let signFlag = 0;
let operator = '';
display.value = '';


// Should be able to handle negative input 
// Should be able to handle multiple digit inputs 
// Todo: decimal input support
// Prevent users from entering more than one operator and instead replace prev operator with recent one


function operandFunction(input){
    if (display.value.length < 10) {
        display.value += input;
        
        // if user did not enter anything yet
        if (num1 === undefined || operator === '') {
            num1 = (num1 !== undefined ? num1.toString() : '') + input;
            num1 = parseFloat(num1);
            // if user input is negative
            if (operator == '-'){
                num1 = -1 * num1;
                signFlag = 1;
                operator = '';
            }
            num1 = num1.toString();
            console.log(`num1 = ${num1}`);
            return num1;
        }
        // not sure if this is being used 
        else if (parseFloat(display.value) < 0 && num1 !== undefined && signFlag == 0){
            num1 = (num1 !== undefined ? num1.toString() : '') + input;
            num1 = num1.toString();
            console.log(`num1 ok= ${num1}`);
            return num1;
        }
        // if user enters negative first operand and then tries to subtract
        else if (parseFloat(display.value) < 0 && num1 !== undefined && signFlag == 1){
            num2 = (num2 !== undefined ? num2.toString() : '') + input;
            num2 = num2.toString();
            console.log(`num2 ok= ${num2}`);
            return num2;
        }
        // if user enters negative input
        else if (num1 !== undefined && operator == '-' && num2 === undefined){
            if (result === undefined || result === num1){
                num2 = (num2 !== undefined ? num2.toString() : '') + input;
                num2 = parseFloat(num2);
                console.log(`num2 hello = ${num2}`);
                return num2;                
            }
            // not sure if this is being used 
            num1 = parseFloat(num1);
            num1 = -1 * num1;
            num1 = num1.toString();
            console.log(`num1 hello= ${num1}`);
            display.value = num1;
        }
        // if user already entered first operand
        else if (num1 !== undefined && operator !== '' && num2 == undefined) {
            num2 = (num2 !== undefined ? num2.toString() : '') + input;
            num2 = parseFloat(num2);
            console.log(`num2 = ${num2}`);
        }

        else if (num1 !== undefined && operator !== '' && num2 !== undefined){
            num2 = (num2 !== undefined ? num2.toString() : '') + input;
            console.log(`num2 = ${num2}`);
            return num2;
        }
    }
}

function operatorFunction(input){
    // if first operand and operator is already input
    if(num2 !== undefined){
        operate();
    }
    operator = input;
    console.log(`operator = ${operator}`);
    console.log(`num1 = ${num1}`);
    console.log(`num2 = ${num2}`);
    console.log(`result = ${result}`);
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
    console.log(`num1 = ${num1}`);
    console.log(`operator = ${operator}`);
    console.log(`num2 = ${num2}`);
    console.log(`result = ${result}`);
    display.value = result;
    num1 = result; // Storing the result for further operations
    num2 = undefined;
}

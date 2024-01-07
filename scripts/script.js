const display = document.querySelector('.display');
let num1;
let num2;
let result;
let operator = '';

function appendToDisplay(input){
    display.value += input;
    if (isNaN(input)){
        operator = input;
        console.log(operator);
        if (num1 && num2 && operator){
            calculate();
            display.value += operator;
            operator = '';
        }
    }

    else{
        if (!num1){
            num1 = input;
            console.log(num1);
        }
        else{
            num2 = input;
            console.log(num2);
        }
    }
}


function clearDisplay(){
    display.value = '';
}

function allClear(){
    display.value = '';
    num1 = null;
    num2 = null;
    operator = '';
}

function operate(){
    if (operator == '+'){
        result = parseFloat(num1) + parseFloat(num2);
        display.value = result;
        num1 = result;
        num2 = null;
        operator = ''
        console.log(result);
    }

    else if (operator == '-'){
        result = parseFloat(num1) - parseFloat(num2);
        display.value = result;
        num1 = result;
        num2 = null;
        operator = ''
        console.log(result);
    }
}

function calculate(){
    if (operator == '+'){
        result = parseFloat(num1) + parseFloat(num2);
        display.value = result;
        num1 = result;
        num2 = null;
        console.log(result);
    }
    else if (operator == '-'){
        result = parseFloat(num1) - parseFloat(num2);
        display.value = result;
        num1 = result;
        num2 = null;
        console.log(result);
    }
}
// Create object to keep track of values
const Calculator = {
    // Default '0' on calculator screen
    Display_Value: '0',
    // First operand storage, default null
    First_Operand: null,
    // Check second operand
    Wait_Second_Operand: false,
    // Operator storage, default null
    operator: null,
};

// Modify values each time a button is clicked
function InputDigit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    // Check if Wait_Second_Operand is true and set Display_Value
    // to clicked button value
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Overwrite Display_Value if current value is 0
        // otherwise add onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// Function to handle decimals
function InputDecimal(dot) {
    // This ensure that accidental decimal point doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // If Display_Value does not contain decimal point
        // we want to add a decimal point.
        Calculator.Display_Value += dot;
    }
}

// Operator handling
function HandleOperator(NextOperator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    
    // When operator key is pressed, convert current number
    // to 'Number' and store result in Calculator.First_Operand
    const ValueOfInput = parseFloat(Display_Value);
    
    // Check if operator exists and Wait_Second_Operand is true
    // then update the operator and exit function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = NextOperator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = ValueOfInput;
    } else if (operator) {
        // Check if operator exists
        const ValueNow = First_Operand || 0;
        // If operator exists, perform property lookup for operator
        // in the Perform_Calculation object and the function that
        // matches the operator is executed
        let result = Perform_Calculation[operator](ValueNow, ValueOfInput);
        // Add fixed amount of numbers after decimal
        result = (result * 1).toFixed(9);
        // Remove trailing 0's
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = NextOperator;
}

// Perform calculation based on which operator is chosen
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

// Reset/Clear calculator
function CalculatorReset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// Update screen with Display_Value
function UpdateDisplay() {
    // Use calc-screen class to target input tag
    const display = document.querySelector('.calc-screen');
    display.value = Calculator.Display_Value;
}
UpdateDisplay();

// Monitor button clicks
const keys = document.querySelector('.calc-keys');
keys.addEventListener('click', (event) => {
    // Target variable is object that represents element
    // that was clicked.
    const {target} = event;
    // If element clicked is not button, exit function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        HandleOperator(target.value);
        UpdateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        InputDecimal(target.value);
        UpdateDisplay();
        return;
    }
    // Ensures that AC clears all inputs from screen
    if (target.classList.contains('all-clear')) {
        CalculatorReset();
        UpdateDisplay();
        return;
    }
    InputDigit(target.value);
    UpdateDisplay();
})
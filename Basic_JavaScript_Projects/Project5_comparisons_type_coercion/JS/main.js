// Print 'typeof' number 5 to screen
// document.write(typeof 5);

// Use type coercion to create string of numbers
function typeString(element) {
    let x = "12" + 10;
    element.innerHTML = '"12" + 10 = ' + x;
};

// Use type coercion to create subtraction operation
function typeNum(element) {
    let x = 12 - "10";
    element.innerHTML = '12 - "10" = ' + x;
};

// Display NaN
function dispNan(element) {
    element.innerHTML = 0 / 0;
};

// Display true from isNaN()
function dispTrue(element) {
    element.innerHTML = isNaN('Not NaN!');
};

// Display false from isNaN()
function dispFalse(element) {
    element.innerHTML = isNaN(5);
};

// Display Infinity
function dispInfinity(element) {
    element.innerHTML = 2E320;
};

// Display Negative Infinity
function dispNegInfinity(element) {
    element.innerHTML = -2E320;
};

// Display true from boolean comparison
function dispTrueBool(element) {
    element.innerHTML = 10 > 5;
};

// Display false from boolean comparison
function dispFalseBool(element) {
    element.innerHTML = 10 < 5;
};
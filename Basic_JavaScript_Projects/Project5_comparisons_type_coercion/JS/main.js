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

// Create console.log elements
console.log(10 * 20);
console.log(10 > 20);

// Display true from equal comparison
function equalTrue(element) {
    element.innerHTML = 10 == 10;
};

// Display false from equal comparison
function equalFalse(element) {
    element.innerHTML = 10 == 11;
};

// Display true from triple equals
function sameAll(element) {
    element.innerHTML = 10 === 10;
};

// Display false from triple equals
function diffAll(element) {
    element.innerHTML = 12 === "10";
};

// Display false from triple equals with same Value
function sameVal(element) {
    element.innerHTML = 12 === "12";
};

// Display false from triple equals with same type
function sameType(element) {
    element.innerHTML = "10" === "12";
};

// Display true from logical 'and'
function andLogicTrue(element) {
    element.innerHTML = 5 > 3 && 3 > 2;
};

// Display false from logical 'and'
function andLogicFalse(element) {
    element.innerHTML = 5 > 6 && 3 > 2;
};

// Display true from logical 'or'
function orLogicTrue(element) {
    element.innerHTML = 5 > 3 || 3 > 3;
};

// Display flase from logical 'or;
function orLogicFalse(element) {
    element.innerHTML = 2 > 3 || 3 > 3;
};
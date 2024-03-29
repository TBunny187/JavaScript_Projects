// Multiplication
function mathFunc(element) {
    let x = 2 * 20;
    element.innerHTML = "2 * 20 = " + x;
};

// Subtraction
function subFunc(element) {
    let x = 3 - 1;
    element.innerHTML = "3 - 1 = " + x;
};

// Division
function divFunc(element) {
    element.innerHTML = "10 / 2 = " + 10 / 2;
};

// Multiple math operations
function multops(element) {
    let ans = 10 / 2 + 10 * 5;
    element.innerHTML = "10 / 2 + 10 * 5 = " + ans;
};

// Modulus
function modFunc(element) {
    let mod = 25 % 6;
    element.innerHTML = "25 % 6 = " + mod;
};

// Negation
function negFunc(element) {
    let neg = 25;
    element.innerHTML = "25 negated is " + -neg;
};

// Increment by one
function addOne(element) {
    let x = 5;
    element.innerHTML = "++5 = " + ++x;
}

// Decrement by one
function subOne(element) {
    let x = 9;
    element.innerHTML = "--9 = " + --x;
}

// Random number utilizing Math.trunc to remove decimal numbers
function randomNum(element) {
    let x = Math.trunc(Math.random() * 100);
    element.innerHTML = "Random num between 0 and 100 = " + x;
}
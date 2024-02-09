function mathFunc(element) {
    element.innerHTML = 2 * 20;
};

function subFunc(element) {
    element.innerHTML = 3 - 1;
};

function divFunc(element) {
    element.innerHTML = "10 / 2 = " + 10 / 2;
};

function multops(element) {
    let ans = 10 / 2 + 10 * 5;
    element.innerHTML = "10 / 2 + 10 * 5 = " + ans;
};

function modFunc(element) {
    let mod = 25 % 6;
    element.innerHTML = "25 % 6 = " + mod;
};

function negFunc(element) {
    let neg = 25;
    element.innerHTML = "25 negated is " + -neg;
};
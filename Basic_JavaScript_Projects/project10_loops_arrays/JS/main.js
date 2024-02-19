let count = 0;

function callLoop() {
    while(count < 10) {
        count++;
        let print = document.getElementById('loop');
        print.innerHTML += count + '<br>';
    };
};

let strLength = document.getElementById('strLength').value;
let printLength = document.getElementById('printLength');

function strLen() {
    let strLength = document.getElementById('strLength').value;
    let printLength = document.getElementById('printLength');
    printLength.innerHTML = strLength.length;
};

function forLoop() {
    let printLoop = document.getElementById('evenNumbers');
    for (let i = 1; i < 15; i++) {
        if (i % 2 === 0) {
            printLoop.innerHTML += i + '<br>';
        };
    };
};

function arrayFunction() {
    let arr = ["arr1", "arr2", "arr3"];
    let print = document.getElementById('array');
    print.innerHTML = arr;
    print.innerHTML += " " + arr[1];
};

const Birthdays = {
    "Sean": {Month: "October", Day: 7},
    "Kelly": {Month: "October", Day: 12},
};

function constantFunction() {
    let name = document.getElementById('name').value;
    let print = document.getElementById('constant');

    print.innerHTML = Birthdays[name].Month + " " + Birthdays[name].Day;
};

function addBirthday() {
    let newName = document.getElementById('newName').value;
    let newMonth = document.getElementById('newMonth').value;
    let newDay = document.getElementById('newDay').value;

    Birthdays[newName] = {Month: newMonth, Day: newDay};
};

function addNums(num1, num2) {
    return num1 + num2;
};

function printNums() {
    let firstNum = Number(document.getElementById('firstNum').value);
    let secondNum = Number(document.getElementById('secondNum').value);
    let print = document.getElementById('addition');

    print.innerHTML = addNums(firstNum, secondNum);
};
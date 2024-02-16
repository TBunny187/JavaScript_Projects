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
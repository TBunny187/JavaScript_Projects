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
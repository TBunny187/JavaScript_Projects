let count = 0;

function callLoop() {
    while(count < 10) {
        count++;
        let print = document.getElementById('loop');
        print.innerHTML += count + '<br>';
    };
};
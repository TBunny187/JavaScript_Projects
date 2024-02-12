function countdown() {
    let seconds = document.getElementById('seconds').value;

    function tick() {
        let timer = document.getElementById('timer');
        seconds -=1 ;
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        };
    };
    tick();
};
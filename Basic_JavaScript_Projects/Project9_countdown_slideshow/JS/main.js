// Create countdown function
function countdown() {
    let seconds = Number(document.getElementById('seconds').value);

    // Add nested function for 'tick' of seconds
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

    // Call 'tick' function from outer function
    tick();
};
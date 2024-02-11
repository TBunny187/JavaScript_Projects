// let glob = 'Global variable';

// function locVar() {
//     let loc = 'Local Variable';
//     console.log(loc);
// };

// function locVarErr() {
//     console.log(loc);
// };

// console.log(glob);
// locVar();
// locVarErr();

// Get local time hour
let dh = new Date().getHours();

// Display greeting for time of day (morning, afternoon, evening)
function timeCheck() {
    let greet = document.getElementById('displayGreeting');
    if (dh < 12) {
        greet.innerHTML = 'Good Morning!';
    } else if (dh < 1700) {
        greet.innerHTML = 'Good Afternoon!';
    } else {
        greet.innerHTML = 'Good Evening!';
    }
}
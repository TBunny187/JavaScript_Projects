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
    };
};

// Display greeting based on age
function checkAge() {
    
    // Get value of age entered by user
    let age = document.getElementById('age').value;

    // Create variable to display greeting
    let greet = document.getElementById('ageCheck');

    // Check age, and give customized greeting
    if (age < 10) {
        greet.innerHTML = "Do your parents know you're using the internet?";
    } else if (age < 18) {
        greet.innerHTML = "You're not quite old enough to be on here, come back in a few years";
    } else {
        greet.innerHTML = "Welcome to my site, enjoy your stay!";
    };
};
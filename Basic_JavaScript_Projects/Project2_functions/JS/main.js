let over = "You're hovering over the button!";
let out = "You're not hovering over the button!";

// Create function for onmouseover event
function func1() {
    document.getElementById("text").innerHTML = over;
};

// Create function for onmouseout event
function func2() {
    document.getElementById('text').innerHTML = out;
};

// Create function for concatenation
function func3() {
    let sentence = "I'm learning a lot";    // create var to concat to
    sentence += " from this bootcamp!";     //concat onto sentence variable
    document.getElementById('concatenate').innerHTML = sentence;
}
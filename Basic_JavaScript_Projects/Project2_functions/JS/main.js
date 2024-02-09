let over = "You're hovering over the button!";
let out = "You're not hovering over the button!";

function func1() {
    document.getElementById("text").innerHTML = over;
};

function func2() {
    document.getElementById('text').innerHTML = out;
};

function func3() {
    let sentence = "I'm learning a lot";
    sentence += " from this bootcamp!";
    document.getElementById('concatenate').innerHTML = sentence;
}
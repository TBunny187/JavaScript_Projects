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

let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}

showSlides(slideIndex);

// Next, Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Image Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
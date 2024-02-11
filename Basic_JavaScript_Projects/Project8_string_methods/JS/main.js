// Create function to concatenate multiple strings into single sentence
function concatStrs() {
    let concatStr = document.getElementById('concatStr');

    let one = 'I concatenated ';
    let two = 'all of these parts ';
    let three = 'into a single long ';
    let four = 'sentence, using concat().';
    
    concatStr.innerHTML = one.concat(two, three, four);
};

// Create function that slices string to create single word
function sliceMethod() {
    let sliceMethod = document.getElementById('sliceMethod');

    let sliceStr = 'This string will be sliced.';
    let slicedStr = sliceStr.slice(5, 11);

    sliceMethod.innerHTML = slicedStr;
};

// Take value of input, change to upper case, print to paragraph
function toUpper() {
    let val = document.getElementById('toUpperCase').value;
    let print = document.getElementById('upperCase');

    print.innerHTML = val.toUpperCase();
};
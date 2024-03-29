function getReceipt() {
    // Initialize string to be able to pass from function to function
    // growing line by line into full receipt
    let text1 = '<h3>You ordered:</h3>';
    let runningTotal = 0;
    let sizeTotal = 0;
    let selectedSize = '';
    let sizeArray = document.getElementsByClassName('size');
    for (let i = 0; i < sizeArray.length; i++) {
        if(sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + '<br>';
        }
    }

    if(selectedSize === 'Personal Pizza') {
        sizeTotal = 6;
    } else if(selectedSize === 'Small Pizza') {
        sizeTotal = 8;
    } else if(selectedSize === 'Medium Pizza') {
        sizeTotal = 10;
    } else if(selectedSize === 'Large Pizza') {
        sizeTotal = 14;
    } else if(selectedSize === 'Extra Large Pizza') {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + ' = $' + sizeTotal + '.00');
    console.log('size text1: ' + text1);
    console.log('subtotal: $' + runningTotal + '.00');

    // These variables will get passed on to each function
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    let totalTopping = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName('toppings');

    for(let j = 0; j < toppingArray.length; j++) {
        if(toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log('selected topping item: (' + toppingArray[j].value + ')');
            text1 = text1 + toppingArray[j].value + '<br>';
        }
    }

    let toppingCount = selectedTopping.length;
    if(toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    runningTotal += toppingTotal;
    console.log('total selected topping items: ' + toppingCount);
    console.log(toppingCount + ' topping - 1 free topping = ' + '$' + toppingTotal + '.00');
    console.log('topping text1: ' + text1);
    console.log('Purchase Total: ' + '$' + runningTotal + '.00');
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = '<h3>Total: <strong>$' + runningTotal + '.00' + '</strong></h3>';
};
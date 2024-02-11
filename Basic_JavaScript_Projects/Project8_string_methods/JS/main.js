function concatStrs() {
    let one = 'I concatenated ';
    let two = 'all of these parts ';
    let three = 'into a single long ';
    let four = 'sentence, using concat().';

    document.write(one.concat(two, three, four));
}

concatStrs();
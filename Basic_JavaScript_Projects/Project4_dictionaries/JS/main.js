let dict = {
    "Animal": "Dog",
    "Breed": "Shiba Inu",
    "Age": 5,
    "Sound": "Arf! Arf!",
};

function dictOutPut(element) {
    element.innerHTML = dict.Breed;
};

let dict2 = {
    "Animal": "Dog",
    "Breed": "Jack Russell",
    "Age": 3,
    "Sound": "Bark!",
};

delete dict2.Breed;

function dictDelete(element) {
    element.innerHTML = dict2.Breed;
};
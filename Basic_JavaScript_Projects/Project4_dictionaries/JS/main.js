// Create a dictionary
let dict = {
    "Animal": "Dog",
    "Breed": "Shiba Inu",
    "Age": 5,
    "Sound": "Arf! Arf!",
};

// Display breed of animal
function dictOutPut(element) {
    element.innerHTML = dict.Breed;
};

// Create another dictionary
let dict2 = {
    "Animal": "Dog",
    "Breed": "Jack Russell",
    "Age": 3,
    "Sound": "Bark!",
};

// Delete 'Breed' from dict2
delete dict2.Breed;

// Display 'undefined' from the deleted 'Breed' of dict2
function dictDelete(element) {
    element.innerHTML = dict2.Breed;
};
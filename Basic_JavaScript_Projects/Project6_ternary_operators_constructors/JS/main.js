function Ride_Function() {
    let Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById('Ride').innerHTML = Can_ride + " to ride.";
};

function checkAge() {
    let age = document.getElementById('age').value;
    let ageCheck = document.getElementById('ageCheck');
    let checkValue = age < 1 ? "Please enter your age!": age > 17 ? "You are old enough to vote!" : "You are not old enough to vote!";
    ageCheck.innerHTML = checkValue;
};

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
};

let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function objFunc() {
    document.getElementById("New_and_This").innerHTML = 
    'Emily drives a ' + Emily.Vehicle_Color + '-colored ' + Emily.Vehicle_Model +
    ' manufactured in ' + Emily.Vehicle_Year;
}
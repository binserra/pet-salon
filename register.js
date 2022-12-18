let petSalon={
    name: "The Fashion Pet",
    address : {
        street : "Broadway",
        zip: "91910",
        number : "500"
    },
    hours :{
        open :"9am",
        closed : "5pm",
    },
    pets:[]
}
// constructor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactPhone = phone;

}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");


function register(){
    // get the values from HTML
console.log(inputName.value,inputAge.value,inputBreed.value,inputGender,inputService,inputOwner,inputPhone);
    // create a new object
let newPet = new Pet(inputName.value,inputAge.value,inputBreed.value,inputGender,inputService,inputOwner,inputPhone);

petSalon.pets.push(newPet);

console.log(petSalon.pets);
    // display the obj on the console
clearForm();
}

function clearForm(){
    inputName.value ="";
    inputAge.value ="";
    inputBreed.value ="";
    inputGender ="";
    inputService ="";
    inputOwner ="";
    inputPhone ="";
}
// function displayInfo(){
    


// }

function init(){
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-5555");
let scrappy = new Pet("Scrappy",5,"Female","Pitbull","Nail Trim","Bri","111-222-3333");

petSalon.pets.push(scooby);  
// adding the pet array
}
window.onload = init;



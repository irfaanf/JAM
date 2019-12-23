
// var bob = {
//     name: 'Bob',
//     surname: 'Brown'
// };

// // An object literal appears to inherit *everything* from another object literal
// var charlie = Object.create(bob);
// console.log(charlie);
// console.log(charlie.name);      
// console.log(charlie.surname);


// var daniel = Object.create(bob);
// var ethan = Object.create(bob);
// var felix = Object.create(bob);

// bob.middleName = 'Bradley';

// // console.log(daniel);
// // console.log(ethan);
// // console.log(felix);

// // All the child objects appear to inherit from the same instance of bob. 
// // We only seem to have one instance of bob as the prototype of all of the
// // child instances
// console.log(daniel.__proto__ === ethan.__proto__);








// Constructors and the .prototype property
// var Bird = function(name, breed){
//     this.name = name,
//     this.breed = breed 
// };

// var fawkes = new Bird('Fawkes', 'Phoenix');
// var hermes = new Bird('Hermes', 'Tawny');

// console.log(fawkes);
// console.log(hermes);




var Human = function(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
};
Human.prototype.printNames = function(){
    return this.firstName + ' ' + this.lastName;
};
var greg = new Human('Greg', 'Gregory');
var henry = new Human('Henry', 'Harrison');
var ian = new Human('Ian', 'Iminsys');
console.log(greg);
console.log(henry);
console.log(ian.constructor);

var a = { name: 'A' };
console.log(a.constructor());
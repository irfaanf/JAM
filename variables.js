/**
 * Variables
 */
console.log('*** Variables ***')

// In JS, variables are declared using var
var name = 'Adam';
console.log(name);

var surname = 'Smith';
console.log(surname);

var age = 25;
console.log(age);

// Variables can be declared and assigned separately
var favouriteColor;
favouriteColor = 'navy';
console.log(favouriteColor);




// // Undeclared variables have a *value* of undefined
// var job;
// console.log(job);

// // The difference between undefined value and an error
// console.log(book); // Error

// var car;
// console.log(car); // car has undefined value, but there is no error

// var store = 'PickNPay';
// console.log(store);





/* Scope of var */ 
// console.log('*** Scope of var: ***');

// // A variable declared outside a function is called a global variable and can be accessed anywhere
// var num = 5;
// function printNum(){
//     console.log(num);
// }
// printNum(); // Works
// console.log(num); // Works


// // A variable declared inside a function can only be accessed inside that function
// var something;
// function doSomething(){
//     something = 12;
//     console.log(something);
// }
// doSomething(); // Works
// console.log(something); // Error: Not defined. Note: It is not undefined




/* Question: Variables declared with var vs without var */
// console.log('*** With var vs without var ***')

// alert("There is a typo in your Tipo");

// typo = "Camputer";
// console.log(typo);

// var typoTwo = "journel";
// console.log(typoTwo);


// Hoisting experimentation [N.B.: Hoisting is intended to be covered later]
// Variables declared without var are not hoisted i.e. JS is not aware that they exist

// console.log(langOutsideWithoutVar);

// langOutsideWithoutVar = "Afrikaans";
// var langOutsideWithVar = "English";

// function saySomething(){
    
//     langInsideWithoutVar = "Türkçe";
//     var langInsideWithVar = "Français";
// }

// saySomething();





// external = 5;
// function firstTry() {
//   var external = 6;
//   console.log("First Try: " + external);
// }

// function secondTry() {
//   external = 7;
//   console.log("Second Try: " + external);
// }

// console.log(external); // Prints 5
// firstTry(); // Prints 6
// console.log(external); // Prints 5
// secondTry(); // Prints 7
// console.log(external); // Prints 7
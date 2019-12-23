/**
 * Exploring Prototypes
 * 
 * In JavaScript, each object has a link to another object called its prototype. The original object
 * inherits properties from its prototype. The prototype object itself has a link to its own
 * prototype and so on, forming the prototype chain. The last link in the chain is null which by
 * definition has no prototype. Most JS objects are instances of Object which sits at the top of 
 * the prototype chain, its prototype is then null.
 * 
 * Question: What is the connection between an object's prototype and the .prototype property which is set
 * in a constructor function?
 */






/* The two snippets below illustrate the prototype chain using Object.create
/* 1) Setting an object's prototype */
// var a = {
//     label: 'A'
// };

// var b = Object.create(a);
// console.log(b);
// console.log(b.__proto__);
// console.log(b.label);

// var c = Object.create(b);
// console.log(c);
// console.log(c.__proto__);
// console.log(c.__proto__.__proto__);
// console.log(c.label);


/* 2) Different ways of accessing a prototype */
// var man = {
//     name: 'Sam'
// };

// var fireman = Object.create(man);
// console.log(fireman.__proto__);
// console.log(Object.getPrototypeOf(fireman));
// Things to consider: scope, versions/compatability, performance, conventions









var grandfather = {
    name: 'Septimus',
    surname: 'Van Zyl',
    __proto__:{},
};

grandfather.__proto__.job = 'painter'; 
console.log(grandfather);

var father = Object.create(grandfather);
father.name = 'pa';
console.log(father.job);


var grandfather2 = {
    name: 'Septimus',
    __proto__: {surname: 'Van Zyl'}
};

console.log(grandfather2);

var father2 = Object.create(grandfather2);
console.log(father2);










/* Constructor functions */
// var Person = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// var john = new Person('john', 'smith');
// // console.log(john.__proto__);
// console.log(john.firstName);

// var tiaan = Object.create(john);
// // console.log(tiaan.__proto__);
// console.log(tiaan.firstName);
/**
 * Objects
 */

/* Object literal */
// This is an actual object. Yet we don't have a class
// Incorrect assumption: This is a class with two static variables and a method.
// Object literals are the simplest way to declare an object, however we need to manually duplicate methods i.e. type them out manually
var susara = {
    name: 'Susara',
    surname: 'Botha',
    groet: function () {
        console.log('Goeie More');
    }
};

var koba = {
    name: 'Koba',
    surname: 'Van der Merwe',
    groet: function () {
        console.log('Goeie More');
    }
};

var margeretha = {
    name: 'Margeretha',
    surname: 'Le Roux',
    groet: function () {
        console.log('Goeie More');
    }
};

// console.log(susara.surname);
// susara.groet();
// koba.groet();
// margeretha.groet();



/* Constructor Function */
// This allows us to have objects which share functionality such as methods. Notice that while this appears to exhibit qualities of a class, it is not.
// Constructor functions save us on syntax compared to object literals.
// Note: syntax is identical to a function. The uppercase P is convention, not a feature of the language.
var Persoon = function (name, surname) {
    this.name = name,
        this.surname = surname,
        this.groet = function () {
            console.log('Goeie More');
        }
};

var susara2 = new Persoon('Susara Twee', 'Botha Twee');
var matrone = new Persoon('Netta', 'Nortje');
var madel = new Persoon('Madel', 'Terreblanche');

susara2.groet();
matrone.groet();
madel.groet();



/* Prototype */
// While constructor functions save on syntax by allowing us to only define our method(s) once, there is still another issue: every object created with 
// the constructor function still contains a copy of the method(s), so we still have duplicate code.
// The prototype is a shared object that can contain one copy of a method which multiple objects then point to.
Persoon.prototype.eet = function () {
    console.log('Nom nom');
};

susara2.eet();
matrone.eet();


// In our prototype
Persoon.prototype.address = 'Hillside';
console.log(madel.address);

var felicity = new Persoon('felicity', 'van der wath');
console.log(felicity.address);

function Human(name, surname) {
    var fname = name;
    var sname = surname;
};

var cornelius = new Human('Cornelius', 'Marais');
console.log(cornelius);




console.log('Birds');
var Bird = function (breed, name) {
    this.breed = breed,
        this.name = name
};
Bird.prototype.fly = function () {
    console.log('whoosh');
};

Bird.laysEggs = true;

var hedwig = new Bird('snowy', 'Hedwig');
// Bird.prototype.laysEggs = true;

console.log(hedwig);
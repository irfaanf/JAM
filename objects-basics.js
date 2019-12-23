/**
 * Objects basics
 */

/* Object literals */
console.log('Object Literals')

var adam = {
    name: 'Adam',
    surname: 'Anderson',
    age: 22
};

console.log(adam.name);
console.log(adam.surname);
console.log(adam.age);

var bob = {
    name: 'Bob',
    surname: 'Johnson',
    birthYear: 1993,
    family: ['Brenda', 'Bart', 'Barbara'],
    calculateAge: function () {
        return 2019 - this.birthYear;
    }
}

bob.name = 'Benjamin';
bob['surname'] = 'Davis';
console.log(bob);


/* new Object */
var gary = new Object();
gary.name = 'Gary';
gary.surname = 'Smith';
gary.job = 'Teacher';
gary.printFullName = function () {
    return this.name + ' ' + this.surname;
}

console.log(gary.printFullName());
console.log(gary);



/* Object.create */
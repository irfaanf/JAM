// this.foo
// We'll get to this in Objects (Remind me if I forget)
var scribe = {
    name: 'Alexios',
    surname: 'Apollo',
    age: 56,
    yearsToRetirement: this.age
    // printInfo: function(){
    //     console.log(this.name + ' is ' + this.age);

    //     innerFunc = function(){
    //         console.log('Inner: ' + this.age);
    //     }

    //     innerFunc();
    // },
}

// scribe.printInfo();
console.log(scribe.yearsToRetirement);



var something;
function doSomething(){
    something = 12;
    console.log(something);
}
doSomething(); // Works
console.log(something); // This isn't undefined since something is assigned a value of 12 when doSomething is invoked.






// var taal = 'Afrikaans';
// taal.priority = 1;
// console.log(taal.priority);



var hempSeedIsUsedToMakeTShirts = false;





// console.log(NaN == NaN);




// example from last week
console.log(a + b);
var a = 25;
var b = 10;
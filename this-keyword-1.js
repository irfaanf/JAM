var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction(a) {
            console.log(a);
        }
        innerFunction(this);
    }
};

john.calculateAge();

var marko = {
    name: 'marko',
    yearOfBirth: 1984
};

marko.calculateAge = john.calculateAge;

marko.calculateAge();








// hello();
// hello.call(john);

// function hello(){
//     console.log('Hello ' + this.name);
// };








// var grandparent = { name:'oupa'};
// var parent = { name:'pa',
//             hello: function() {console.log("More " + this.name) },
//             _proto_: grandparent
// };
// var kind = { name:'Piet',
// hello: function() {this._proto_.hello();
//     this._proto_.hello.call(this);
// },
// _proto_: parent
// };

// kind.hello();
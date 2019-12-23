// var speculaasAreAwesome = true;

// if (speculaasAreAwesome) {
//     var item = 'featherPen';
// };

// console.log(item);




//  Execution Stack VS Scope Chain
var a = 'Hallo';
var b = "meh";
first();

function first() {
    var b = 'Hi!'
    second();

    function second() {
        var c = 'Hey!'
        third();
    };
};

function third() {
    var d = 'John';
    console.log(a + b /*&+ c */+ d);
    // console.log(b);
};









// Unrelated - Objects and constructors

function Bird (name, breed, size){
    this.name = name,
    this.size = size,
    this.color = {
        'breed': breed
    }
};

var hedwig = new Bird('hedwig', 'snowy', 'medium');
console.log(hedwig);
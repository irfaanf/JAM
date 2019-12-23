var startingAmounts = [124, 48, 268];

//console.log(startingAmounts.1);
// Doesn't like this syntax -> Can't address an array the same way as you would Object attributes

//console.log(startingAmounts[1]);
//Old school [] notation accepted

var amountsToPay = calculateAllTipAmounts(startingAmounts);
//Sensei said to leave lambda-like function notation for now  - copied and tweaked it to its equivalent form below
// amountsToPay.forEach((element, index) => {
// message1 = "Without tip: " + startingAmounts[index] + ", With Tip:" + element;
// //I was allowed to create a local variable without using 'var'
// //what is the difference between a variables declared:
// // var foo = ...
// // this.foo = ...
// // foo = ...
// console.log(message1);
// });

amountsToPay.forEach(function(element, index){
message1 = "Without tip: " + startingAmounts[index] + ", With Tip:" + element;
//I was allowed to create a local variable without using 'var'
//what is the difference between a variables declared:
// var foo = ...
// this.foo = ...
// foo = ...
console.log(message1);
});

function calculateAllTipAmounts(tipAmounts){
var amountsPlusTips = new Array(tipAmounts.length);

//Can use a lambda like structure to define a function...
//when and how should these be used?
tipAmounts.forEach((element, index) => {
amountsPlusTips[index] = calculateAmountPlusTip(element);
});

return amountsPlusTips;
};

function calculateAmountPlusTip(startingAmount){
return startingAmount *( 1 + tipPercentage(startingAmount));
};

function tipPercentage(amount){
if (amount >= 200) {
return 0.1;
} else if ( amount>= 150){
return 0.15;
} else{
return 0.2;
}
};


// var startingAmountsHashTable = {
// a = 123,
// b = "this"

// }; //Object Literal -> Only allows you to define attributes, uses commas to seperate
/**
 * Data Type Comparisons
 */

// // Strict Equality ===
// // Comparing values only vs comparing values and types
// // Will return true only if the two operands have same value and type
// var num1 = 7;
// var num2 = 7;
// console.log(num1 == num2); // Ordinary equality: Checks value only
// console.log(num1 === num2); // Strict equality: Checks value and type

// var num3 = 12;
// var num4 = "12";
// console.log(num3 == num4);
// console.log(num3 === num4);


// // Strict Inequality !==
// // Conceptual opposite of Strict Equality above i.e. essentially !===
// // Will return true only if the two operands are NOT strictly equal i.e. if at least one between value and type are different
var fiveNumber = 5;
var fiveString = "5";
var nineNumber = 9

console.log(fiveNumber === fiveNumber); 
console.log(fiveNumber === fiveString);
console.log(fiveNumber === nineNumber); 

console.log(fiveNumber !== fiveNumber); // false
console.log(fiveNumber !== fiveString); // true: Only one of the two (value and not type) is the same. fiveNumber is not strictly equal to fiveString = true
console.log(fiveNumber !== nineNumber); // true: Only one of the two (type and not value) is the same. fiveNumber is not strictly equal to nineNumber = true



// // Comparing data with different data types can produce unexpected results
// console.log(3 < 10);
// console.log(3 < "10");
// console.log("3" < "10");
// console.log("3" < "John");
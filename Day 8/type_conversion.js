// Primitive Types
let num = 42; // Number
let str = "Hello"; // String
let isTrue = true; // Boolean
let undefinedVar; // Undefined
let nullVar = null; // Null

// Object Types
let obj = { key: 'value' }; // Object
let arr = [1, 2, 3]; // Array
function myFunction() { /* code */ } // Function

// Type Conversion - Implicit
let implicitStr = "The answer is " + num; // Implicit conversion: num is converted to a string
console.log(implicitStr);

// Type Conversion - Explicit
let numStr = "123";
let strToNum = Number(numStr); // Explicit conversion to number
console.log(strToNum);

let boolValue = Boolean("Hello"); // Explicit conversion to boolean (non-empty strings are truthy)
console.log(boolValue);

// Type Checking
console.log(typeof num); // Output: "number"
console.log(typeof str); // Output: "string"
console.log(typeof isTrue); // Output: "boolean"
console.log(typeof undefinedVar); // Output: "undefined"
console.log(typeof nullVar); // Output: "object"
console.log(typeof obj); // Output: "object"
console.log(typeof arr); // Output: "object"
console.log(typeof myFunction); // Output: "function"

// NaN (Not-a-Number)
let result = "abc" / 2; // Result is NaN
console.log(result);

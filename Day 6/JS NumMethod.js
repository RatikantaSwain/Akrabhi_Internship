// Using toFixed() method
const num1 = 123.45678;
const fixedNum = num1.toFixed(2); // "123.46"

// Using toPrecision() method
const num2 = 123.45678;
const precisionNum = num2.toPrecision(4); // "123.5"

// Using toExponential() method
const num3 = 12345;
const exponentialNum = num3.toExponential(2); // "1.23e+4"

// Using parseInt() and parseFloat() methods
const integerString = "42";
const integer = parseInt(integerString); // 42

const floatString = "3.14";
const floatingPoint = parseFloat(floatString); // 3.14

// Using isNaN() function
const notANumber = isNaN("Hello"); // true

// Using isFinite() function
const finiteValue = isFinite(42); // true
const infiniteValue = isFinite(Infinity); // false

// Using Math object
const radius = 5;
const area = Math.PI * Math.pow(radius, 2); // Calculate the area of a circle

// Using Number properties
const maxNum = Number.MAX_VALUE;
const minNum = Number.MIN_VALUE;
const posInfinity = Number.POSITIVE_INFINITY;
const negInfinity = Number.NEGATIVE_INFINITY;

console.log("toFixed():", fixedNum);
console.log("toPrecision():", precisionNum);
console.log("toExponential():", exponentialNum);
console.log("parseInt():", integer);
console.log("parseFloat():", floatingPoint);
console.log("isNaN():", notANumber);
console.log("isFinite():", finiteValue);
console.log("Math.PI:", Math.PI);
console.log("Area of a circle:", area);
console.log("Number.MAX_VALUE:", maxNum);
console.log("Number.MIN_VALUE:", minNum);
console.log("Number.POSITIVE_INFINITY:", posInfinity);
console.log("Number.NEGATIVE_INFINITY:", negInfinity);

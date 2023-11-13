//Creating an Array
const fruits = ["apple", "banana", "cherry"];

// Accessing elements
const firstFruit = fruits[0];
const secondFruit = fruits[1];

// Modifying elements
fruits[1] = "orange";

// Adding elements to the end of the array
fruits.push("grape");

// Removing elements from the end of the array
fruits.pop();

// Array length
const numFruits = fruits.length;

// Iterating over the array
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Adding elements to the beginning of the array
fruits.unshift("kiwi");

// Removing elements from the beginning of the array
fruits.shift();

// Slicing an array
const selectedFruits = fruits.slice(1, 3);

// Concatenating arrays
const moreFruits = ["pineapple", "strawberry"];
const allFruits = fruits.concat(moreFruits);

// Searching for an element
const indexOfCherry = fruits.indexOf("cherry");

// Removing elements by index
fruits.splice(1, 1);

// Array methods
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const squared = numbers.map((num) => num * num);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);
numbers.sort((a, b) => a - b);

console.log("Modified Array:", fruits);
console.log("Array Length:", numFruits);
console.log("Selected Fruits:", selectedFruits);
console.log("All Fruits:", allFruits);
console.log("Index of 'cherry':", indexOfCherry);
console.log("Squared Numbers:", squared);
console.log("Even Numbers:", evenNumbers);
console.log("Sum of Numbers:", sum);
console.log("Sorted Numbers:", numbers);

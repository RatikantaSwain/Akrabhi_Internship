// Creating a Set
let mySet = new Set();

// Adding elements
mySet.add(1);
mySet.add('Hello');
mySet.add({ key: 'value' });

// Checking size
console.log("Size of the Set:", mySet.size);

// Checking if an element is in the Set
console.log("Does the Set have 'Hello'?", mySet.has('Hello'));

// Deleting an element
mySet.delete(1);

// Iterating over the Set
console.log("Iterating over the Set:");
mySet.forEach(function(value) {
  console.log(value);
});

// Converting Set to Array
let arrayFromSet = Array.from(mySet);
console.log("Array from Set:", arrayFromSet);

// Clearing the Set
mySet.clear();
console.log("Size of the Set after clearing:", mySet.size);

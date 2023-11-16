// Creating a Map
let myMap = new Map();

// Adding key-value pairs
myMap.set('key1', 'value1');
myMap.set(2, 'value2');
myMap.set({ key: 'key3' }, 'value3');

// Getting values
console.log("Value for 'key1':", myMap.get('key1'));

// Checking if a key exists
console.log("Does the Map have 'key1'?", myMap.has('key1'));

// Deleting a key-value pair
myMap.delete('key1');

// Iterating over the Map
console.log("Iterating over the Map:");
myMap.forEach(function(value, key) {
  console.log(key, value);
});

// Converting Map to Array
let arrayFromMap = Array.from(myMap);
console.log("Array from Map:", arrayFromMap);

// Clearing the Map
myMap.clear();
console.log("Size of the Map after clearing:", myMap.size);

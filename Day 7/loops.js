// Example 1: for loop
console.log("Example 1: for loop");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Example 2: while loop
console.log("\nExample 2: while loop");
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Example 3: do-while loop
console.log("\nExample 3: do-while loop");
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// Example 4: for...in loop
console.log("\nExample 4: for...in loop");
const person = { name: 'John', age: 30, occupation: 'developer' };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}

// Example 5: for...of loop
console.log("\nExample 5: for...of loop");
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

// Example 6: Nested loops
console.log("\nExample 6: Nested loops");
for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 2; y++) {
    console.log(x, y);
  }
}

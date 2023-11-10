
const singleQuotedString = 'This is a single-quoted string.';
const doubleQuotedString = "This is a double-quoted string.";
const backtickString = `This is a backtick string.`;


const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
const templateString = `${firstName} ${lastName}`;

console.log(fullName); 
console.log(templateString); 


const text = 'Hello, World!';
console.log(text.length); 


console.log(text[0]); 
console.log(text[7]); 


console.log(text.indexOf('World')); 
console.log(text.slice(0, 5)); 
console.log(text.replace('World', 'Universe')); 


const escapedString = 'This is a single-quoted string with a \n newline character.';
console.log(escapedString);


const multilineString = `
This is a
multiline
string.
`;
console.log(multilineString);

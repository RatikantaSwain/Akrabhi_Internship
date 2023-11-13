// Creating a Date
const currentDate = new Date();
const customDate = new Date(2023, 2, 13, 15, 30, 0);
const parsedDate = new Date('2023-03-13T15:30:00');

// Getting Date Components
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // Month (0-11)
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Formatting Dates (Custom function for formatting)
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const formattedCustomDate = formatDate(customDate);

// Manipulating Dates
const tomorrow = new Date();
tomorrow.setDate(currentDate.getDate() + 1);

// Comparing Dates
const date1 = new Date('2023-01-01');
const date2 = new Date('2023-02-01');
const isDate1Earlier = date1 < date2;

// Working with Time Zones
const utcDate = new Date('2023-03-13T15:30:00');
const utcYear = utcDate.getUTCFullYear();
const utcTimeString = utcDate.toUTCString();

// Timestamps
const timestamp = currentDate.getTime();

console.log("Current Date:", currentDate);
console.log("Custom Date:", customDate);
console.log("Parsed Date:", parsedDate);
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Formatted Custom Date:", formattedCustomDate);
console.log("Tomorrow:", tomorrow);
console.log("Is date1 earlier than date2?", isDate1Earlier);
console.log("UTC Year:", utcYear);
console.log("UTC Time String:", utcTimeString);
console.log("Timestamp:", timestamp);

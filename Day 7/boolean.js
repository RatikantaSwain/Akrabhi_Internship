// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Function to generate a random number between 1 and 100
  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Generate a random number
  let randomNumber = getRandomNumber();
  console.log("Random Number:", randomNumber);
  
  // Check if the random number is prime
  if (isPrime(randomNumber)) {
    console.log("It's a prime number!");
  } else {
    console.log("It's not a prime number.");
  }
  
  // Example of a boolean variable in a more complex scenario
  let isWeekend = false;
  let currentTime = new Date();
  let currentDay = currentTime.getDay();
  
  if (currentDay === 0 || currentDay === 6) {
    isWeekend = true;
  }
  
  console.log("Is it the weekend?", isWeekend);
  
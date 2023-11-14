// Function to generate a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate a random RGB color
  function getRandomColor() {
    const red = getRandomInt(0, 255);
    const green = getRandomInt(0, 255);
    const blue = getRandomInt(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
  // Function to select a random item from an array
  function getRandomArrayItem(array) {
    const randomIndex = getRandomInt(0, array.length - 1);
    return array[randomIndex];
  }
  
  // Example usage
  const randomInteger = getRandomInt(1, 100);
  console.log('Random Integer:', randomInteger);
  
  const randomColor = getRandomColor();
  console.log('Random Color:', randomColor);
  
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];
  const randomFruit = getRandomArrayItem(fruits);
  console.log('Random Fruit:', randomFruit);
  
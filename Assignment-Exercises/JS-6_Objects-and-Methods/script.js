// Step 1: Create a car object

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

// Step 2: Create a function to describe the car

function getDescription(carObject) {
  return `This car is a ${carObject.year} ${carObject.make} ${carObject.model}.`;
}

// Step 3: Call the function and display the result

console.log(getDescription(car));

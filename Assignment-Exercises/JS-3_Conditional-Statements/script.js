function checkAge() {
  let age = document.getElementById("ageInput").value;

  age = Number(age);

  let category;

  if (isNaN(age) || age < 0 || age > 120) {
    category = "Invalid age. Please enter a valid number.";
  } else if (age >= 0 && age <= 12) {
    category = "Child";
  } else if (age >= 13 && age <= 19) {
    category = "Teenager";
  } else {
    category = "Adult";
  }

  document.getElementById("result").textContent = "You are a(n): " + category;
}

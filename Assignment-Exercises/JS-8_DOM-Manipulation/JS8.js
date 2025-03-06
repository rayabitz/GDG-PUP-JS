// your code starts hereconst counterText = document.querySelector("#counter-text");
const addButton = document.querySelector("#button-add");
const subtractButton = document.querySelector("#button-subtract");

if (!counterText || !addButton || !subtractButton) {
  console.error("One or more elements not found. Check your IDs.");
} else {
  let counterVal = 0;

  function updateCounter() {
    counterText.textContent = counterVal;
  }

  addButton.addEventListener("click", function () {
    counterVal++;
    updateCounter();
  });

  subtractButton.addEventListener("click", function () {
    if (counterVal > 0) {
      counterVal--;
      updateCounter();
    }
  });

  updateCounter();
}

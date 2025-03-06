const button = document.getElementById("colorButton");

function getRandomColor() {
  let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return hex;
}

button.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});

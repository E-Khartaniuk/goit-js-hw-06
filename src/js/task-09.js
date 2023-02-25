const bgColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", getRandomHexColor);
button.addEventListener("click", randomBGColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function randomBGColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  bgColor.textContent = getRandomHexColor();
}

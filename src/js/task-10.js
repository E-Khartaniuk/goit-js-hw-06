function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls").children;
const boxes = document.getElementById("boxes");

const inputEl = controls[0];
const createEl = controls[1];
const destroyEl = controls[2];

createEl.addEventListener("click", createColection);
destroyEl.addEventListener("click", destroyBoxes);

const num = inputEl.value;

function createColection() {
  destroyBoxes();

  const elementsArr = [];
  let boxSize = 20;

  for (let i = 0; i < inputEl.value; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("colorBox");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.height = `${boxSize + 10}px`;
    newDiv.style.width = `${boxSize + 10}px`;
    boxSize += 10;
    elementsArr.push(newDiv);
  }

  boxes.append(...elementsArr);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

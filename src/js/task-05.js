const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", onInput);

function onInput(event) {
  if (nameOutputEl.length !== 0) {
    nameOutputEl.textContent = event.currentTarget.value;
  }
}

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueCount = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
let counterValue = 0;

function onDecrementBtnClick() {
  counterValue -= 1;
  valueCount.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  valueCount.textContent = counterValue;
}

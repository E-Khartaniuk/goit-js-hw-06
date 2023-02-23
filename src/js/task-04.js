

const decrementBtn = document.querySelector('button[data-action="decrement"]') 
const incrementBtn = document.querySelector('button[data-action="increment"]') 
const valueCount = document.querySelector("#value");


decrementBtn.addEventListener('click', onDecrementBtnClick)
incrementBtn.addEventListener('click', onIncrementBtnClick)
let counterValue = 0;

function onDecrementBtnClick() { 
 counterValue = counterValue - 1
    valueCount.textContent = counterValue - 1;
}

function onIncrementBtnClick() { 
    counterValue = counterValue + 1
    valueCount.textContent = counterValue + 1;
}


const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", onFocusLost);

let dataLengthNum = validationInputEl.getAttribute("data-length");

function onFocusLost() {
  let inputLength = validationInputEl.value.length;

  if (inputLength === Number(dataLengthNum)) {
    validationInputEl.classList.add("valid");
    validationInputEl.classList.remove("invalid");
  } else {
    validationInputEl.classList.add("invalid");
    validationInputEl.classList.remove("valid");
  }
}

// function onFocusLost() {
//   let inputLength = validationInputEl.value.length;

//   if (inputLength === Number(dataLengthNum)) {
//     validationInputEl.classList.toggle("valid");
//   } else {
//     validationInputEl.classList.toggle("invalid");
//   }
// }
// console.log(validationInputEl.value.length);

// -------------------

// const validationInput = document.querySelector("#validation-input");
// validationInput.addEventListener("blur", () => {
//   validationInput.classList.toggle(
//     "valid",
//     validationInput.value.length >= dataLengthNum
//   );
//   validationInput.classList.toggle(
//     "invalid",
//     validationInput.value.length < dataLengthNum
//   );
// });

// console.log(validationInput.value.length < dataLengthNum);

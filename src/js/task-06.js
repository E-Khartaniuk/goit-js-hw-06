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


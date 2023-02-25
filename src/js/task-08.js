const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector(".email");
const inputPasswordEl = document.querySelector(".password");
const btnSubmitEl = document.querySelector(".submit");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   console.dir(event.target.email.value);
  //   console.dir(event.target.password.value);

  if (event.target.email.value === "" || event.target.password.value === "") {
    return alert("Заповніть всі поля, живо");
  }

  const userData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };
  console.log(userData);

  event.currentTarget.reset();
}

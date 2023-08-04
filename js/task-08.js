const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerMakeForm);

function handlerMakeForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log({
    email: email.value,
    password: password.value,
  });
 
  event.currentTarget.reset();
}

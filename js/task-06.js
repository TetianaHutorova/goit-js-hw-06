const input = document.querySelector("#validation-input");

input.addEventListener("blur", handlerCheckConditions);

function handlerCheckConditions(event) {
  if (input.dataset.length == event.currentTarget.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid")
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");

  }
 }

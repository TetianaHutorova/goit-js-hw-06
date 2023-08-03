const input = document.querySelector("#validation-input");

input.addEventListener("blur", handlerCheckConditions);
function handlerCheckConditions(event) {
  if (input.dataset.length == event.currentTarget.value.length) {
    return input.classList.add("valid");
  }
  return input.classList.add("invalid");
}

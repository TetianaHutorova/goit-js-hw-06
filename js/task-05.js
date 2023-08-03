const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", handlerName);

function handlerName(event) {
  if (event.currentTarget.value.trim()) {
    refs.output.textContent = event.currentTarget.value;
  } else {
    refs.output.textContent = "Anonymous";
  }
}
 

const refs = {
  value: document.querySelector("#value"),
  decrementButtonEl: document.querySelector(
    '#counter button[data-action="decrement"]'
  ),
  incrementButtonEl: document.querySelector(
    '#counter button[data-action="increment"]'
  ),
};

refs.decrementButtonEl.addEventListener("click", handlerDecrement);

refs.incrementButtonEl.addEventListener("click", handlerIncrement);

let counterValue = 0;

function handlerDecrement() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function handlerIncrement() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
 
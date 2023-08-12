const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  box: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", handlerCheckValue);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function handlerCheckValue() {
  if (
    refs.input.value.trim() === "" ||
    refs.input.value < Number(refs.input.min) ||
    refs.input.value > Number(refs.input.max)
  ) {
    alert(`Enter a number from ${refs.input.min} to ${refs.input.max}`);
  } else {
    createBoxes(refs.input.value);
  }
}

function createBoxes(amount) {
  let string = "";
  let width = 20;
  let height = 20;
  for (let index = 0; index < amount; index += 1) {
    const newDiv = `<div style="background-color: ${getRandomHexColor()}; width: ${(width =
      width + 10)}px; height: ${(height = height + 10)}px;"></div>`;
    string += newDiv;
  }
  refs.box.insertAdjacentHTML("beforeend", string);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroyBoxes() {
  refs.box.innerHTML = refs.input.value = "";
}

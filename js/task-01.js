const totalList = document.querySelector("#categories");
console.log(`Number of categories: ${totalList.children.length}`);

[...totalList.children].forEach((element) => {
  console.log(`Category:${element.firstElementChild.textContent}`);

  console.log(`Elements:${element.lastElementChild.children.length}`);
});

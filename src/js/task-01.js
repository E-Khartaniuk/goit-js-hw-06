const numbOfCategoryByChildren = document.querySelectorAll(".item");
console.log(`Кількість категорій: ${numbOfCategoryByChildren.length}`);

numbOfCategoryByChildren.forEach((num) => {
  console.log(
    `Category: ${num.firstElementChild.textContent}
Elements: ${num.lastElementChild.children.length}`
  );
});

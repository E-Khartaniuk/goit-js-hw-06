const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients')

const elements = [];

function createList(ingredients) {

  for (let i = 0; i < ingredients.length; i += 1) {
    const newLi = document.createElement('li')
    newLi.textContent = ingredients[i]
    newLi.classList.add('item')
    elements.push(newLi)
  }
  
  ulEl.append(...elements)
}

createList(ingredients)


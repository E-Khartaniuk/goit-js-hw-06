const animals = document.querySelector('.item').lastElementChild
const animalsTitle = document.querySelector('.item').firstElementChild.textContent

const products = document.querySelector('.item').nextElementSibling.lastElementChild
const productsTitle = document.querySelector('.item').nextElementSibling.firstElementChild.textContent

const technologies = document.querySelector('.item').nextElementSibling.nextElementSibling.lastElementChild
const technologiesTitle = document.querySelector('.item').nextElementSibling.nextElementSibling.firstElementChild.textContent

const numbOfCatagory = document.getElementById('categories').children.length


console.log(`Number of categories: ${numbOfCatagory}`)
console.log(`Category: ${animalsTitle}\nElements: ${animals.children.length}`)
console.log(`Category: ${productsTitle}\nElements: ${products.children.length}`)
console.log(`Category: ${technologiesTitle}\nElements: ${technologies.children.length}`)





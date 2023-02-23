// First try----

// const animals = document.querySelector('.item').lastElementChild
// const animalsTitle = document.querySelector('.item').firstElementChild.textContent

// const products = document.querySelector('.item').nextElementSibling.lastElementChild
// const productsTitle = document.querySelector('.item').nextElementSibling.firstElementChild.textContent

// const technologies = document.querySelector('.item').nextElementSibling.nextElementSibling.lastElementChild
// const technologiesTitle = document.querySelector('.item').nextElementSibling.nextElementSibling.firstElementChild.textContent

// const numbOfCatagory = document.getElementById('categories').children.length


// console.log(`Number of categories: ${numbOfCatagory}`)
// console.log(`Category: ${animalsTitle}\nElements: ${animals.children.length}`)
// console.log(`Category: ${productsTitle}\nElements: ${products.children.length}`)
// console.log(`Category: ${technologiesTitle}\nElements: ${technologies.children.length}`)


// Second try----

// const numbOfCategoryByChildren = document.getElementById('categories').children


// console.log(`Category: ${numbOfCategoryByChildren[0].firstElementChild.textContent}\nElements: ${numbOfCategoryByChildren[0].lastElementChild.children.length}`)
// console.log(`Category: ${numbOfCategoryByChildren[1].firstElementChild.textContent}\nElements: ${numbOfCategoryByChildren[1].lastElementChild.children.length}`)
// console.log(`Category: ${numbOfCategoryByChildren[2].firstElementChild.textContent}\nElements: ${numbOfCategoryByChildren[2].lastElementChild.children.length}`)



// third try----


const numbOfCategoryByChildren = document.getElementById('categories').children

function findCategorylength(numb) { 

    for (let i = 0; i < numb.length; i +=1) { 
        console.log(`Category: ${numb[i].firstElementChild.textContent}\nElements: ${numb[i].lastElementChild.children.length}`)
    }
}

findCategorylength(numbOfCategoryByChildren)
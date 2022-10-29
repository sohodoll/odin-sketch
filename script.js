const grid = document.querySelector('.grid__wrapper');
const sizeInput = document.querySelector('#size');
const sizeLabel = document.querySelector('.size__label');
const startButton = document.querySelector('.start');

//function creates required number of elements and returns an array of
//these new elements

const createElement = (element, classname, amount) => {
    let newElement;
    let elementArray = [];
    for (let i = 0; i < amount; i++) {
        newElement = document.createElement(element);
        newElement.classList.add(classname);
        elementArray.push(newElement);
    }
    return elementArray;
}

//function to populate chosen element with new elements

const populateElement = (parent, child) => {
    parent.appendChild(child);
}

//change grid column template according to the number of squares

const sizeGrid = () => {
    grid.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);
    grid.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
}

//get size from the user

let size = 1;

sizeInput.addEventListener('input', () => {
    sizeLabel.textContent = `${sizeInput.value}x${sizeInput.value}`;
    size = sizeInput.value;
})

//remove all child elements from the parent (clear the grid)

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//draw grid according to the user input

const drawGrid = () => {
    removeAllChildNodes(grid);
    let numberOfElements = size**2;
    squaresArray = createElement('div', 'grid__element', numberOfElements);
    squaresArray.forEach(square => {
        populateElement(grid, square);
    })
    sizeGrid();
};

startButton.addEventListener('click', drawGrid);
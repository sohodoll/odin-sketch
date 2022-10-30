//html elements

const grid = document.querySelector('.grid__wrapper');
const sizeInput = document.querySelector('#size');
const sizeLabel = document.querySelector('.size__label');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const eraseButton = document.querySelector('.erase');
const rainbowButton = document.querySelector('.rainbow');

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

let squaresArray = [];
let mouseIsDown = false;
let color = 'black';


const drawGrid = () => {
    removeAllChildNodes(grid);
    let numberOfElements = size**2;
    squaresArray = createElement('div', 'grid__element', numberOfElements);
    squaresArray.forEach(square => {
        populateElement(grid, square);
    })
    sizeGrid();

    //check if mouse is down on a square

        window.addEventListener('mousedown', () => {
            mouseIsDown = true;
        });
        window.addEventListener('mouseup', () => {
            mouseIsDown = false;
        });

    //change background color if mouse is down

    squaresArray.forEach(square => {
        square.addEventListener('mousemove', () => {
            if(mouseIsDown) {
                if(isRainbow) {
                    color = rainbow[getRandomIndex()];
                }
                square.style.backgroundColor = color;
            }
        });
    })
};

startButton.addEventListener('click', drawGrid);

//erase mode

let isErasing = false;

const eraseMode = () => {
    if(!isErasing) {
        eraseButton.classList.add('active');
        rainbowButton.classList.remove('active');
        isErasing = true;
        isRainbow = false;
        color = 'var(--dark)';
    } else {
        eraseButton.classList.remove('active');
        isErasing = false;
        color = 'black';
    }
}

eraseButton.addEventListener('click', eraseMode);

//rainbow mode

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const getRandomIndex = () => {
    return Math.floor(Math.random() * 5);
}

let isRainbow = false;

const colorify = () => {
    if(!isRainbow) {
        isRainbow = true;
        isErasing = false;
        eraseButton.classList.remove('active');
        rainbowButton.classList.add('active');
    } else {
        isRainbow = false;
        color = 'black';
        rainbowButton.classList.remove('active');
    }
}

rainbowButton.addEventListener('click', colorify);





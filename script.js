const grid = document.querySelector('.grid__wrapper');


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


let divs = createElement('div', 'grid__element', 4);

divs.forEach(div => {
    populateElement(grid, div);
})
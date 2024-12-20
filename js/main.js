
// Create initial screen grid structure of 16 by 16 divs
const container = document.querySelector(".content-container");

for (i=0; i<16; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.toggle("div-row");
    rowDiv.id = `row-div-${i}`;
    for (j=0; j<16; j++) {
        let div = document.createElement("div");
        div.id = `div-${i}-${j}`;
        div.classList.toggle("grid-div");
        rowDiv.appendChild(div);
    }
    container.append(rowDiv);
}

// Remove all divs from the container div
function deleteScreenGrid() {
    let lastChild = container.lastElementChild;
    while (lastChild.tagName == "DIV") {
        container.removeChild(container.lastElementChild);
        lastChild = container.lastElementChild;
    }
}

// Update screen grid size with given size
function updateScreenGrid(newSize) {
    deleteScreenGrid()

    let sizeRatio = 16 / newSize

    for (i=0; i<newSize; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.toggle("div-row");
        rowDiv.id = `row-div-${i}`;
        for (j=0; j<newSize; j++) {
            let div = document.createElement("div");
            div.id = `div-${i}-${j}`;
            div.classList.toggle("grid-div");
            div.style.height = `${sizeRatio * 40}px`
            div.style.width = `${sizeRatio * 40}px`
            rowDiv.appendChild(div);
        }
        container.append(rowDiv);
    }
    enterCount = 0;
}


let enterCount = 0
document.addEventListener("mouseover", (e) => {
    let target = e.target;

    // Detects when element entered by the mouse is a part of the screen grid
    if (target.classList.contains("grid-div")) {
        // Handles color changing of divs entered
        let currentColor = "#bcb6b6";
        if (enterCount < 100) {
            enterCount += 10;
        }
        if (target.style.backgroundColor) {
            currentColor = target.style.backgroundColor;
        }
        else {
            currentColor = "#bcb6b6";
        }
        target.style.backgroundColor = `color-mix(in oklab, #4f4d4e ${enterCount.toString()}%, ${currentColor}`;
    } else {
        enterCount = 0;
    }
});


document.addEventListener("click", (e) => {
    let target = e.target;
    
    if (target.id == "title") {
        // Gets new grid size from user and validates input
        let gridSize = prompt("Enter new grid size between 1 and 100");
        while (!Number(gridSize) || Number(gridSize) < 1 || Number(gridSize) > 100) {
            gridSize = prompt("Invalid grid size. Enter new grid size between 1 and 100");
        }
        updateScreenGrid(gridSize);
    }
});
// Create initial page structure of 16 by 
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

let enterCount = 0;

document.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.classList.contains("grid-div")) {
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
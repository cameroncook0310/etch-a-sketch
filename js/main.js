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
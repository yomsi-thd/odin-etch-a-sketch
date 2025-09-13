//Create square divs and put the squares inside a "container" div
const container = document.querySelector(".container");
let defaultGridSize = 16 ** 2;

function createSquareDivGrid(userInput){
    numberOfSquareDivsToAdd = userInput ** 2;
    for (let i = 1; i <= numberOfSquareDivsToAdd; i++){
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute("class", "square");
        squareDiv.style.width = `${960/16}px`;
        squareDiv.style.height = `${960/16}px`;
        container.appendChild(squareDiv);
    };
}
createSquareDivGrid(defaultGridSize); // The default grid size is 16x16

function removeSquareDivGrid(){
    const squareDivGrid = document.querySelectorAll(".square");
    squareDivGrid.forEach((squareDiv) => container.removeChild(squareDiv));
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    removeSquareDivGrid();
})
//Create square divs and put the squares inside a "container" div
const container = document.querySelector(".container");
let defaultGridSize = 16;

function createSquareDivGrid(userInput){
    numberOfSquareDivsToAdd = userInput ** 2;
    for (let i = 1; i <= numberOfSquareDivsToAdd; i++){
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute("class", "square");
        squareDiv.style.width = `${960/userInput}px`;
        squareDiv.style.height = `${960/userInput}px`;
        container.appendChild(squareDiv);
    };
}
createSquareDivGrid(defaultGridSize); // The default grid size is 16x16

function addDrawUponHoverToSquareDivs(){
    const squareDivGrid = document.querySelectorAll(".square");
    squareDivGrid.forEach((squareDiv) => {
        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style["background-color"] = "rgb(0,0,0)";
        });
    });
};
addDrawUponHoverToSquareDivs(); //The default grid gets an event listener

function removeSquareDivGrid(){
    const squareDivGrid = document.querySelectorAll(".square");
    squareDivGrid.forEach((squareDiv) => container.removeChild(squareDiv));
}

function getUserDesiredGridSize(){
    let userInput = parseInt(prompt("Please enter your desired grid size (min: 1 | max: 100): "));
    while (!Number.isInteger(userInput) || userInput < 1 || userInput > 100) {
        userInput = parseInt(prompt("Please enter your desired grid size (min: 1 | max: 100): "));
    }
    return userInput;
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridSize = getUserDesiredGridSize();
    removeSquareDivGrid();
    createSquareDivGrid(gridSize);
    addDrawUponHoverToSquareDivs();
});
//Create square divs and put the squares inside a "container" div
const container = document.querySelector(".container");
let numberOfSquareDivsToAdd = 16 * 16;
for (let i = 0; i <= numberOfSquareDivsToAdd; i++){
    const squareDiv = document.createElement('div');
    squareDiv.setAttribute("class", "square");
    container.appendChild(squareDiv);
};
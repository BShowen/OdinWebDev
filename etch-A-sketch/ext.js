
//public variables for use in functions, to set ids, classes, and insertion points
const body = document.body;
const container = document.createElement('div');
container.setAttribute("id", "container");
const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'gridContainer');
const script = document.querySelector('script');

let gridCount = 28;
let drawTurnedOn = false;

// set gridCount from user prompt
const getCanvasSizeFromUser = () => {
    gridCount = prompt("How many drawing cells wide would you like the canvas?", 28);
}

// Make a new grid on every function call
const makeGrid  = (numberOfCells) => {
    const cellSize = Math.floor(480/numberOfCells);

    // build gridRows
    for (let i = 0; i < numberOfCells; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");
        gridContainer.appendChild(gridRow);
    }
    
    // fill rows with cells, add gridRow class to rows
    getGridRows().forEach((row) => {
        for (let i = 0; i < numberOfCells; i++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add("gridCell");
            row.appendChild(gridCell);
        }
    });
    
    setCellSize(cellSize);    
}

// helper function for makeGrid() - sets dimensions of each cell according to gridCount and canvas size
const setCellSize = (pixelSize) => {
    const rows = getGridRows();
    const cells = getGridCells();
    
    rows.forEach((row) => {
        row.setAttribute("style", `height: ${pixelSize + 'px'};`);
    });
    cells.forEach((cell) => {
        cell.setAttribute("style", `width: ${pixelSize + 'px'}; height: ${pixelSize + 'px'};`);
    });
}

// helper function for button click - get new list of gridCells
const getGridCells = () => {
    return document.querySelectorAll('.gridCell');
}

// helper function for makeGrid() - gets new list of gridRows
const getGridRows = () => {
    gridRows = document.querySelectorAll('.gridRow');
    return gridRows;
}

const makeGameBoard = () => {
    // create container div
    body.insertBefore(container, script);

    // add gridContainer div to container
    container.appendChild(gridContainer);
}

// Helper for gridCell event Listener
const draw = (cell) => {
    cell.target.style.background = 'yellow';
}

// Add reset button to top, triggers all function calls
const btn = document.createElement('button');
btn.textContent = "Reset";
body.insertBefore(btn, script);

makeGameBoard();

btn.addEventListener('click', (e) => {
    // Prevent stacking of gridCells on mupltiple presses of the btn
    gridContainer.innerText = '';
    // Build the cells/canvas
    getCanvasSizeFromUser();
    makeGrid(gridCount);
    
    // draw enabled after button press
    getGridRows().forEach((gridCell) => {

        gridCell.addEventListener('mouseover', (e) => {
            if (e.target.classList = "gridCell") {
                draw(e);
            }
        });
    });
});
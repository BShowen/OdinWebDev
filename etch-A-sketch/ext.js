const body = document.body;

//public variables for use in functions
const gridRow = createElement('div');
gridRow.classList.add("gridRow");
const gridCell = createElement('div');
gridCell.classList.add("gridCell");

let gridCount = 28;

// create container div
const container = document.createElement('div');
const script = document.querySelector('script');
container.setAttribute("id", "container");
body.insertBefore(container, script);

// add gridContainer div to container
const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'gridContainer');
container.appendChild(gridContainer);

// Add reset button to top
const btn = document.createElement('button');
btn.textContent = "Reset";
body.insertBefore(btn, container);
btn.addEventListener('click', (e) => {
    gridCells.forEach((gridCell) => {
        gridCell.style.background = 'white';
        gridCell.setAttribute("style", `width: ${gridCount + 'px'}; height: ${gridCount + 'px'};`);
    });
});

const makeGrid  = (value) => {
    const gridSize = Math.floor(500/gridCount);

    //remove all content from gridContainer
    //gridContainer.innerHTML = "";
    
    // build gridRows
    for (let i = 0; i < gridSize; i++) {
        gridContainer.appendChild(gridRow);
    }

    // fill rows with cells, add gridRow class to rows
    const gridRows = document.querySelectorAll(".gridRow");
    gridRow.forEach((row) => {
        row.appendChild(gridCell);
    });

    //console.log(gridRows);
    

    
}

// change color of grid cells on mouse hover
const gridCells = document.querySelectorAll('.gridCell');
// Helper for gridCell event Listener
const draw = (cell) => {
    cell.target.style.background = 'yellow';
}

gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', (e) => {
        if (e.target.classList = "gridCell") {
            draw(e);
        }
    })
});



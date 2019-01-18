const body = document.body;

// create container div
const container = document.createElement('div');
const script = document.querySelector('script');
container.setAttribute("id", "container");
body.insertBefore(container, script);

// create 16 x 16 divs
for ( let x = 0; x < 16; x++) {
    const divRow = document.createElement('div');
    divRow.classList.add('divRow');
    for ( let y = 0; y < 16; y++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridCell');
        divRow.appendChild(gridCell);
    }
    container.appendChild(divRow);
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

// Enable reset button

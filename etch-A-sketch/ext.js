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

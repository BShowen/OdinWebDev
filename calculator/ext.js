const buttons = document.querySelectorAll('button');
const print = document.querySelector('#print');
let input = '';

//on event, add input to array?
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const text = e.target.textContent;
        if (text != '=' && text != "Clear") {
            input += text;
            printToDisplay(input);
        } else if (text === '=') {
            arithmatic(input);
            input = ''; 
            print.textContent = '0';   
            console.log('equals');
        } else if (text === 'Clear') {
            input = '';
            print.textContent = '0';
            console.log('Clear');
        }
    });
});


const arithmatic = infoToProcess => {
    const figures = [];
    if (infoToProcess.includes("+")) {
        figures.push(infoToProcess.split('+'));
        figures.push('+');
        console.log('figures is ' + figures);
        console.log('infoToPRocess is ' + infoToProcess);
    }
}

const printToDisplay = input => {
    print.textContent = input;
}
// console.log(buttons);
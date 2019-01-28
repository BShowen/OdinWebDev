const buttons = document.querySelectorAll('button');
const print = document.querySelector('#print');
const operators = "/*-+";
let display = '';
let tempInputArr = [];

// Listen for button presses
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.textContent;
        // equals and clear will be special cases
        if (btnValue != '=' && btnValue != "Clear") {
            // push numerical values to display as well as array for evaluation later
            if (!isOperator(btnValue)) {
                display += btnValue;
                tempInputArr.push(btnValue);
                printToDisplay(display) ;
            } else {
                // push operator values to display
                display += btnValue;
                // push operators with spaces to array to enable easy splitting later
                tempInputArr.push(` ${btnValue} `);
                printToDisplay(display);
            }
        } else if (btnValue === '=') {
            // reset display screen and evaluate math
            arithmatic(tempInputArr);
            display = ''; 
            tempInputArr = [];   
        } else if (btnValue === 'Clear') {
            // reset display screen and variables
            display = '';
            tempInputArr = [];
            print.textContent = '0';
        }
    });
});

const isOperator = key => operators.includes(key) ? true : false ;

const arithmatic = arrToProcess => {
    // join then split to ensure multidigit numbers are accounted for.
    let figures = arrToProcess.join('');
    figures = figures.split(' ');
    // evaluate string, then print to display
    let result = eval(figures.join(''));
    printToDisplay(result);
    
}

const printToDisplay = input => {
    print.textContent = input;
}
const buttons = document.querySelectorAll('button');
const print = document.querySelector('#print');
const operators = "/*-+";
let input = '';
let tempInputArr = [];

//on event, add input to array?
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.textContent;
        if (btnValue != '=' && btnValue != "Clear") {
            if (!isOperator(btnValue)) {
                input += btnValue;
                tempInputArr.push(btnValue);
                printToDisplay(input);
            } else {
                input += btnValue;
                // push operators with spaces to enable easy splitting later
                tempInputArr.push(` ${btnValue} `);
                printToDisplay(input);
                // console.log(tempInputArr);
            }
        } else if (btnValue === '=') {
            arithmatic(tempInputArr);
            input = ''; 
            print.textContent = '0';   
            console.log('equals');
            // console.log(tempInputArr);
        } else if (btnValue === 'Clear') {
            input = '';
            print.textContent = '0';
            console.log('Clear');
        }
    });
});

const isOperator = key => operators.includes(key) ? true : false ;

const arithmatic = arrToProcess => {
    let figures = arrToProcess.join('');
    figures = figures.split(' ');
    // iterate over figures and do the math
    console.log(figures);
    
}

const printToDisplay = input => {
    print.textContent = input;
}
// console.log(buttons);
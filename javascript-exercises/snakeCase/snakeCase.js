const snakeCase = function(phrase) {

    // check for wtf case
    if (phrase.includes("..")){
        // change double periods
        phrase = phrase.split('..').join('_').toLowerCase();
    }
    //Check for camelCase and kebab condition
    if (!phrase.includes(" ")){
        // change camel case, insert underscore before hyphen
        phrase = phrase.split(/(?=[A-Z\-])/).join('_').toLowerCase();
    }   
    // // CHeck for spaces
    // if (phrase.includes(" ")) {
    //     phrase.split(' ').join("_").toLowerCase();
    // }

    // remove hyphens and ..'s, and spaces
    let phraseArr = Array.from(phrase);
    phraseArr = phraseArr.filter(item => item === '-' ? '' : item);
    phraseArr = phraseArr.filter(item => item === '..' ? '' : item);
    //phraseArr = phraseArr.filter(item => item === " " ? '' : item);
    
    // replace space with underscore 
    phraseArr = phraseArr.map(char => {
        if (char === " ") {
            
            return "_";
        } else {
            return char;
        }
    });

    phraseArr = phraseArr.filter(character => {
        if (!character === " ") {
            return character;
        }
    });
    console.log(phraseArr.join(''));
}
snakeCase("here We Go Again");
module.exports = snakeCase

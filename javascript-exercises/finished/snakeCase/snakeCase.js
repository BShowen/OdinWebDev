const snakeCase = function(phrase) {
    let phraseArr;

    // CHeck for spaces
    if (phrase.includes(' ')) {
        phrase = phrase.split(' ').join("_").toLowerCase();
        phraseArr = removeUneededCharacters(phrase);
        phrase = phraseArr.join('');
    }    
    // check for wtf case
    if (phrase.includes("..")){
        // change double periods
        phrase = phrase.split('..').join('_').toLowerCase();
        phraseArr = removeUneededCharacters(phrase);
        phrase = phraseArr.join('');
    } 
    //Check for camelCase and kebab condition
    if (!phrase.includes(" ")){
        // change camel case, insert underscore before hyphen
        phrase = phrase.split(/(?=[A-Z\-])/).join('_').toLowerCase();
        phraseArr = removeUneededCharacters(phrase);
        phrase = phraseArr.join('');
    }   

    phraseArr = phraseArr.filter(item => {
        const code = item.charCodeAt(0);
        if ((code >= 97 && code <= 122) || code === 95 ) {
            return item;
        }
    });

    return phraseArr.join('');
}

const removeUneededCharacters = phrase => {
    let phraseArr = Array.from(phrase);
    phraseArr = phraseArr.filter(item => item === '-' ? '' : item);
    phraseArr = phraseArr.filter(item => item === '.' ? '' : item);
    phraseArr = phraseArr.filter(item => item === " " ? '' : item);
    return phraseArr;
};

//console.log(snakeCase("This is the song that never ends...."));
module.exports = snakeCase

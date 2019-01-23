// const palindromes = function(phrase) {
//     let result = phrase.split('');
//     result = result.reverse().join('');
//     if (phrase === result) {
//         return true;
//     } else {
//         return false;
//     }
// }

const palindromes = function(phrase) {
    let phraseArr = Array.from(phrase.toLowerCase());
    phraseArr = phraseArr.filter( element => {
        if (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) {
            return element;
        }
    });

    phrase = phraseArr.join('');
    let result = phraseArr.reverse().join('');
    
    if (phrase === result) {
        return true;
    } else {
        return false;
    }
}
module.exports = palindromes

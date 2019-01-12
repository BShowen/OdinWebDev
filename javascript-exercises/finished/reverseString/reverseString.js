const reverseString = function(stringToReverse) {
    let stringArray = stringToReverse.split('');
    let reversedString = stringArray.reverse().join("");
    return reversedString; 
}

module.exports = reverseString

const repeatString = function(stringToRepeat, numberOfTimes) {
    let repeats = 0;
    let finalString = '';
    
    // Ensure repeat parameter is positive
    if (numberOfTimes < 0){
        return 'ERROR';
    }

    while (repeats < numberOfTimes) {
        finalString += stringToRepeat;
        repeats++;
    }
    return finalString;
}

module.exports = repeatString

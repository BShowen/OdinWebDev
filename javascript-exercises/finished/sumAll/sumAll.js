const sumAll = function(bottomNumber, topNumber) {
    
    let properOrder = true;
    let numberArray = [];
    let sum = 0;
    
    if (bottomNumber < 0 || topNumber < 0 || typeof(bottomNumber) != "number" ||
            typeof(topNumber) != "number") {
        return "ERROR";
    }

    if (bottomNumber > topNumber) {
        properOrder = false;
    }

    if (properOrder){
        while (bottomNumber <= topNumber) {
            numberArray.push(bottomNumber);
            bottomNumber++;
        }
    } else {
        while (topNumber <= bottomNumber) {
            numberArray.push(topNumber);
            topNumber++;
        }
    }

    numberArray.forEach(function(element) {
        sum += element;
    })

    return sum;
}

module.exports = sumAll

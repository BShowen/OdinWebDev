const removeFromArray = function(originalArray, deleteItems) {

    // Turn arugements into an array to account for multiple elements later
    const args = Array.from(arguments);
    let finalArray;
    let elementsToFind = [];

    //Split the function arguements into arrays
    for (let index = 0; index < args.length; index++) {
        if (index === 0) {
            finalArray = args[0];
        } else {
            elementsToFind.push(args[index]);
        }
    }

    // iterate over the elementsToFind
    for (let item = 0; item < elementsToFind.length; item++) {
        // If elements are found in finalArray, remove from finalArray.
        let index = finalArray.indexOf(elementsToFind[item]);
        // if index === -1, than element was not found
        if (index > -1) {
            finalArray.splice(index, 1);
        }
    }
    
    return finalArray;
}

module.exports = removeFromArray

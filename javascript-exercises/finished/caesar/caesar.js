const caesar = function(code, shift) {
    let codeArr = Array.from(code);
    codeArr = codeArr.map(item => {
        const asciiCode = item.charCodeAt(0);
        if (asciiCode >= 97 && asciiCode <= 122) {
            return lowerCaseLoop(asciiCode, shift);
        } else if (asciiCode >= 97 && asciiCode <= 122) {
            return lowerCaseLoop(asciiCode, shift);
        } else if (asciiCode >= 65 && asciiCode <= 90) {
            return upperCaseLoop(asciiCode, shift);
        } else {
            return item;
        }
    });
    
    const deCoded = codeArr.join('');
    return deCoded;
}

const lowerCaseLoop = (asciiCode, shift) => {
    if (shift > 0) {
        for (let counter = shift; counter > 0; counter--) {
            if (asciiCode === 122) {
                asciiCode = 97;
            } else {
                asciiCode++;
            }
        }
    } else if (shift < 0) {
        for (let counter = shift; counter < 0; counter++) {
            if (asciiCode === 97) {
                asciiCode = 122;
            } else {
                asciiCode--;
            }
        }
    }
    return String.fromCharCode(asciiCode);
}

const upperCaseLoop = (asciiCode, shift) => {
    if (shift > 0) {
        for (let counter = shift; counter > 0; counter--) {
            if (asciiCode === 90) {
                asciiCode = 65;
            } else {
                asciiCode++;
            }
        }
    } else if (shift < 0) {
        for (let counter = shift; counter < 0; counter++) {
            if (asciiCode === 65) {
                asciiCode = 90;
            } else {
                asciiCode--;
            }
        }
    }
    return String.fromCharCode(asciiCode);
}
caesar("as!df", -4);
module.exports = caesar

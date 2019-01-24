const fibonacci = function(value) {
    let fibArr = [1, 1];
    
    if (value < 0) { 
        return "OOPS"; 
    } else if (value <= 2) {
        return fibArr[value];
    }

    for (let i = 2; i <= value; i++) {
        let counter = fibArr[i-1];
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }

    return fibArr[value-1];
}
fibonacci(4);
module.exports = fibonacci

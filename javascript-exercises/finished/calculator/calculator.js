function add (a, b) {
	return a +b;
}

function subtract (a, b) {
	return a - b;
}

function sum (givenArray) {
	const sum = givenArray.reduce((total, value) => total + value, 0);
	return sum;	
}

function multiply (givenArray) {
	const product = givenArray.reduce((total, value) => total * value);
	return product;
}

function power(value, power) {
	return Math.pow(value, power);
}

function factorial(value) {
	let product = 1;
	while (value > 0) {
		product *= value;
		value--;
	}
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
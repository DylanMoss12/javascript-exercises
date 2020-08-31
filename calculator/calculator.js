function add (num1, num2) {
	return (num1 + num2);
}

function subtract (num1, num2) {
	return (num1 - num2);
}

function sum (array) {
	let number = array.length;
	let total = 0;
	for (i = 0; i < number; i++) {
		total += array[i];
	}
	return total;
}

function multiply (array) {
	let number = array.length;
	let total = 1;
	for (i = 0; i < number; i++) {
		total *= array[i];
	}
	return total;
}

function power(num1, num2) {
	return (num1**num2);
}

function factorial(num) {
	result = num;
	if (num == 0) {
		return 1;
	}
	else {
		for (i = (num - 1); i > 0; --i) {
		result *= i;
		}
	return result;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
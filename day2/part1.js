const modules = require('./input')

const addCode = (a, b, c) => {
	const sum = modules[a] + modules[b];
	modules[c] = sum;
}

const multiplyCode = (a, b, c) => {
	const product = modules[a] * modules[b];
	modules[c] = product;
}

const part1 = (array) => {
	console.log(array);
	for ( let i = 0; i < array.length; i++ ) {
		switch(array[i]) {
			case 99:
				return;
			case 1: 
				addCode(array[i+1], array[i+2], array[i+3])
				i = i + 3;
				break;
			case 2: 
				multiplyCode(array[i+1], array[i+2], array[i+3]);
				i = i + 3;
				break;
			default: 
				break;
		}
	}
}

modules[1] = 12;
modules[2] = 2;

part1(modules);

console.log(modules[0]);
const modules = require('./input')

const solution = 19690720;

let noun = 0;
let verb = 0;

const addCode = (array, a, b, c) => {
	const sum = array[a] + array[b];
	array[c] = sum;
	return array;
}

const multiplyCode = (array, a, b, c) => {
	const product = array[a] * array[b];
	array[c] = product;
	return array;
}

const runIntCode = (array) => {
	for ( let i = 0; i < array.length; i++ ) {
		switch(array[i]) {
			case 99:
				return array;
			case 1: 
				array = addCode(array, array[i+1], array[i+2], array[i+3])
				i = i + 3;
				break;
			case 2: 
				array = multiplyCode(array, array[i+1], array[i+2], array[i+3]);
				i = i + 3;
				break;
			default: 
				break;
		}
	}
}

const setNounVerb = (array, noun, verb) => {
	const modulesClone = array.slice(0)
	modulesClone[1] = noun,
	modulesClone[2] = verb;
	return runIntCode(modulesClone);
}

const main = () => {
	for ( noun = 0; noun <= 99; noun++ ) {
		for ( verb = 0; verb <= 99; verb++ ) {
			const finishedArray = setNounVerb(modules, noun, verb);
			if ( finishedArray[0] === solution) return;
		}
	}
}

main();

console.log(noun, verb);
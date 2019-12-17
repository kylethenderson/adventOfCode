
const modules = require('./input');

const testInput = [1969];


const part1 = modules.map(module => {
	const fuel = Math.floor((module / 3) - 2);
	return fuel
}).reduce((acc, cur) => acc + cur);

console.log(part1);
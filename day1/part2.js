
const modules = require('./input')

const part2 = modules.map(input => {
	let result = 0;
	let fuel = 0;

	const findFuel = (mass) => {
		fuel = Math.floor(mass / 3) - 2
		if ( fuel < 0 ) fuel = 0;
		if ( fuel <= 2 ) return fuel
		else {
			return fuel + findFuel(fuel);
		}
	}
	result = findFuel(input);
	return result
	
}).reduce((acc, cur) => acc + cur);

console.log(part2)
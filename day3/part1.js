const inputs = require('./input');

const { wireOne, wireTwo } = inputs;
// const testOne = [ 'R6', 'L3', 'U4', 'D2', 'R2'];
// const wireOne = [ 'R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51' ];
// const wireTwo = [ 'U98','R91','D20','R16','D67','R40','U7','R15','U6','R7' ]

const plotPoints = array => {
	let x = 0;
	let y = 0;
	let points = [];

	for ( let i = 0; i < array.length; i++) {
		const direction = array[i].slice(0, 1);
		const distance = array[i].slice(1);
		switch (direction.toLowerCase()) {
			case 'r':
				for( let r = 0; r < distance; r++) {
					x++
					points.push(`${x},${y}`)
				}
				break;
			case 'l':
				for( let l = 0; l < distance; l++) {
					x--
					points.push(`${x},${y}`)
				}
				break;
			case 'u':
				for( let u = 0; u < distance; u++) {
					y++;
					points.push(`${x},${y}`)
				}
				break;
			case 'd':
				for( let d = 0; d < distance; d++) {
					y--;
					points.push(`${x},${y}`)
				}
				break;
			default:
				return;
		}
	}
	return points;
};

const findShortestDistance = (array) => {
	const distances = [];
	for (let coord of array ) {
		const coords = coord.split(',');
		const xDistance = Number(coords[0]);
		const yDistance = Number(coords[1]);
		distances.push(Math.abs(xDistance) + Math.abs(yDistance));
	}
	distances.sort((a,b) => a < b ? -1 : 1)
	return distances[0];
}


wireOnePoints = plotPoints(wireOne);
wireTwoPoints = plotPoints(wireTwo);

const intersections = wireOnePoints.filter(coord => {
	if ( wireTwoPoints.includes(coord)) {
		return coord;
	}
});

const shortest = findShortestDistance(intersections);


console.log(shortest);

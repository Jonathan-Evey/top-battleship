const Ship = (number) => {
	let length = number;

	let coordinates = [];

	let hits = [];

	const hit = (input) => {
		hits.push(input);
	};

	const isSunk = () => {
		if (length === hits.length) {
			return true;
		} else {
			return false;
		}
	};

	return { length, coordinates, hits, hit, isSunk };
};

module.exports = Ship;

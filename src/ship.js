const Ship = (number) => {
	let length = number;

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

	return { length, hits, hit, isSunk };
};

module.exports = Ship;

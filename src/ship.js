const Ship = (number) => {
	const length = number;
	const hits = [];

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

	return {
		length,
		hits,
		hit,
		isSunk,
	};
};

module.exports = Ship;

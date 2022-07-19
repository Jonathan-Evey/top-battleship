const Ship = (number) => {
	const length = number;
	const placement = [];
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
		placement,
		hits,
		hit,
		isSunk,
	};
};

module.exports = Ship;

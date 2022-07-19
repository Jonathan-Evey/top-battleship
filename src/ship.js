const Ship = (obj) => {
	const name = obj.name;
	const length = obj.size;
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
		name,
		length,
		placement,
		hits,
		hit,
		isSunk,
	};
};

module.exports = Ship;

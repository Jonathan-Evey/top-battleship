const Ship = (obj) => {
	const name = obj.name;
	const size = obj.size;
	const placement = [];
	const hits = [];

	//if ship is hit, store hit in Hhits array
	const hit = (input) => {
		hits.push(input);
	};

	//check if hits is equal to size
	const isSunk = () => {
		if (size === hits.length) {
			return true;
		} else {
			return false;
		}
	};

	return {
		name,
		size,
		placement,
		hits,
		hit,
		isSunk,
	};
};

module.exports = Ship;

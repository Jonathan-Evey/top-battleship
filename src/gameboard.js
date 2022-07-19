const Gameboard = () => {
	const grid = (gridKey) => {
		let gridKey = gridKey;
		let isOpen = true;
	};

	let gameGrid = [];

	const init = () => {
		for (let i = 0; i <= 10; i++) {
			gameGrid.push(grid(`A: ${i}`));
		}
	};

	const place = (startingSquare, shipName, direction) => {
		let newShip = shipName;
		newShip = Ship(shipKeys.shipName.size);
		if (direction === horizontal) {
			for (let i = 0; i < newShip.length; i++)
				newShip.coordinates.push(startingSquare);
		}
	};
};

module.exports = Gameboard;

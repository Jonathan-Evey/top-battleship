const Gameboard = () => {
	const playGrid = [];
	const missedShots = [];
	const PlacedShips = [];
	const sunkShips = [];

	const shipKeys = [
		{
			carrier: {
				name: "Carrier",
				size: 5,
			},
			battleship: {
				name: "Battleship",
				size: 4,
			},
			destroyer: {
				name: "Destroyer",
				size: 3,
			},
			submarine: {
				name: "Submarine",
				size: 3,
			},
			patrolBoat: {
				name: "Patrol Boat",
				size: 2,
			},
		},
	];

	const init = () => {
		for (let i = 0; i < 100; i++) {
			if (i < 10) {
				playGrid.push(`A: ${i + 1}`);
			} else if (i < 20) {
				playGrid.push(`B: ${i - 9}`);
			} else if (i < 30) {
				playGrid.push(`C: ${i - 19}`);
			} else if (i < 40) {
				playGrid.push(`D: ${i - 29}`);
			} else if (i < 50) {
				playGrid.push(`E: ${i - 39}`);
			} else if (i < 60) {
				playGrid.push(`F: ${i - 49}`);
			} else if (i < 70) {
				playGrid.push(`G: ${i - 59}`);
			} else if (i < 80) {
				playGrid.push(`H: ${i - 69}`);
			} else if (i < 90) {
				playGrid.push(`I: ${i - 79}`);
			} else {
				playGrid.push(`J: ${i - 89}`);
			}
		}
		return;
	};

	const place = (selectedSquare, shipName, direction) => {
		let shipBeingPlaced = shipName;
		shipBeingPlaced = Ship(shipKeys.shipName.size);
		if (direction === horizontal) {
			for (let i = 0; i < shipBeingPlaced.length; i++) {
				shipBeingPlaced.placement.push(selectedSquare);
			}
			PlacedShips.push(shipBeingPlaced);
		}
	};

	return {
		playGrid,
		init,
	};
};

module.exports = Gameboard;

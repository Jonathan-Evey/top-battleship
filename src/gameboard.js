const Gameboard = () => {
	const playGrid = [];
	const shotsMissed = [];
	const shotsHit = [];
	const placedShips = [];
	const sunkShips = [];

	const shipKeys = [
		{
			name: "Carrier",
			size: 5,
		},
		{
			name: "Battleship",
			size: 4,
		},
		{
			name: "Destroyer",
			size: 3,
		},
		{
			name: "Submarine",
			size: 3,
		},
		{
			name: "Patrol Boat",
			size: 2,
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

	const place = (coordinates, shipName, direction) => {
		let selectedShip = shipKeys.find((ship) => ship.name === shipName);
		selectedShip = Ship(shipKeys.shipName.size);
		if (direction === horizontal) {
			let selectedCoordinatesIndex = playGrid.findIndex(
				cell === coordinates
			);
			for (let i = 0; i < shipBeingPlaced.length; i++) {
				shipBeingPlaced.placement.push(
					playGrid[selectedCoordinatesIndex + i]
				);
			}
			placedShips.push(shipBeingPlaced);
		}
	};

	const receiveAttack = (coordinates) => {
		if (
			shotsMissed.find(coordinates) === true ||
			shotsHit.find(coordinates) === true
		) {
			return;
		} else if (isHit(coordinates) === true) {
			shotsHit.push(coordinates);
			let hitShip = findHitShip();
			hitShip.hit(coordinates);
			if (hitShip.isSunk() === true) {
				console.log(`Enomy ${hitShip.name} has been sunk!`);
				//checkWin()
			}
			return;
		} else {
			shotsMissed.push(coordinates);
		}
	};

	function isHit(selectedSquare) {
		let serchedShipPlacements;
		for (let i = 0; i < placedShips.length; i++) {
			serchedShipPlacements = placedShips[i].placement;
			if (serchedShipPlacements.includes(selectedSquare)) {
				console.log("hit");
				return true;
			}
		}
		return;
	}

	return {
		playGrid,
		receiveAttack,
		init,
	};
};

module.exports = Gameboard;

const Gameboard = () => {
	const playGrid = [];
	const shotsMissed = [];
	const shotsHit = [];
	const placedShips = [];
	const sunkShips = [];

	//set up a 10X10 play grid Array that is A - J and 1 - 10
	const init = () => {
		for (let i = 0; i < 100; i++) {
			if (i < 10) {
				playGrid.push(`A - ${i + 1}`);
			} else if (i < 20) {
				playGrid.push(`B - ${i - 9}`);
			} else if (i < 30) {
				playGrid.push(`C - ${i - 19}`);
			} else if (i < 40) {
				playGrid.push(`D - ${i - 29}`);
			} else if (i < 50) {
				playGrid.push(`E - ${i - 39}`);
			} else if (i < 60) {
				playGrid.push(`F - ${i - 49}`);
			} else if (i < 70) {
				playGrid.push(`G - ${i - 59}`);
			} else if (i < 80) {
				playGrid.push(`H - ${i - 69}`);
			} else if (i < 90) {
				playGrid.push(`I - ${i - 79}`);
			} else {
				playGrid.push(`J - ${i - 89}`);
			}
		}

		return console.log(playGrid);
	};

	//places a ship based on player input, and stores the placed ships in placedShips
	const place = (coordinates, ship, direction) => {
		console.log(coordinates.toString());
		console.log(ship);
		console.log(direction);
		let shipBeingPlaced = ship;
		if (direction === "horizontal") {
			let selectedCoordinatesIndex = playGrid.indexOf(coordinates);
			console.log(selectedCoordinatesIndex);
			for (let i = 0; i < shipBeingPlaced.size; i++) {
				shipBeingPlaced.placement.push(
					playGrid[selectedCoordinatesIndex + i]
				);
			}
			console.log(shipBeingPlaced.placement);
			placedShips.push(shipBeingPlaced);
		}
		console.log(placedShips);
	};

	//checks an incomming attack to see if it hits a ship or not
	//if it is a hit will save that on the ship
	const receiveAttack = (coordinates) => {
		if (
			shotsMissed.includes(coordinates) === true ||
			shotsHit.includes(coordinates) === true
		) {
			return;
		} else if (isHit(coordinates) === true) {
			console.log("Hit");
			handleHit(coordinates);
			return;
		} else {
			console.log("miss");
			shotsMissed.push(coordinates);
		}
	};

	let foundShip;

	function isHit(coordinates) {
		let serchedShipPlacements;
		for (let i = 0; i < placedShips.length; i++) {
			serchedShipPlacements = placedShips[i].placement;
			if (serchedShipPlacements.includes(coordinates)) {
				foundShip = placedShips[i];
				return true;
			}
		}
		return false;
	}

	function handleHit(coordinates) {
		shotsHit.push(coordinates);
		foundShip.hit(coordinates);
		console.log(placedShips);
		if (foundShip.isSunk() === true) {
			console.log(`The Enemy has sunk your ${foundShip.name}`);
		}
		return;
	}

	function isAllShipsPlaced() {
		if (placedShips.length === 5) {
			return true;
		} else {
			return false;
		}
	}

	return {
		playGrid,
		shotsMissed,
		shotsHit,
		init,
		place,
		receiveAttack,
		isAllShipsPlaced,
	};
};

module.exports = Gameboard;

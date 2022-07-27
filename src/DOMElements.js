const HTML = (function () {
	const main = {
		playerGrid: document.getElementById("player-grid"),
		enemyGrid: document.getElementById("enemy-grid"),
	};

	const ships = {
		shipContainer: document.getElementById("ship-container"),
		carrier: document.getElementById("carrier"),
		battleship: document.getElementById("battleship"),
		destroyer: document.getElementById("destroyer"),
		submarine: document.getElementById("submarine"),
		patrol: document.getElementById("patrol"),
	};

	const btns = {
		fireBtn: document.getElementById("fire-btn"),
	};

	const display = {
		launchCoordinates: document.getElementById("coordinates-display"),
	};

	return {
		main,
		ships,
		btns,
		display,
	};
})();

module.exports = HTML;

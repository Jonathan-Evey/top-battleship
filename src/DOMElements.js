const HTML = (function () {
	const main = {
		playerGrid: document.getElementById("player-grid"),
		enemyGrid: document.getElementById("enemy-grid"),
	};

	const btns = {
		fireBtn: document.getElementById("fire-btn"),
	};

	const display = {
		launchCoordinates: document.getElementById("coordinates-display"),
	};

	return {
		main,
		btns,
		display,
	};
})();

module.exports = HTML;

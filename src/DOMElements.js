const HTML = (function () {
	const startingElements = {
		HTMLHEAD: document.head,
		HTMLBODY: document.body,
	};

	const userInputs = {
		form: document.getElementById("start-game-form"),
		input: document.getElementById("user-name"),
	};

	const placeShipElements = () => {
		return (placeShipHTML = {
			playerGrid: document.getElementById("player-grid"),
			enemyGrid: document.getElementById("enemy-grid"),

			shipContainer: document.getElementById("ship-container"),
			carrier: document.getElementById("carrier"),
			battleship: document.getElementById("battleship"),
			destroyer: document.getElementById("destroyer"),
			submarine: document.getElementById("submarine"),
			patrol: document.getElementById("patrol"),
		});
	};

	const btns = {
		startGame: document.getElementById("start-game"),
		fireBtn: document.getElementById("fire-btn"),
	};

	const display = {
		launchCoordinates: document.getElementById("coordinates-display"),
	};

	const placeShipHTMLIndex = {
		HTMLTemplate: `<header>
		<div class="header-container">
			<div class="header-title-container">
				<h1>Misstion Control</h1>
			</div>
		</div>
	</header>
	<main>
		<section class="player-details">
			<div class="title-container">
				<h3>Fleet Map</h3>
			</div>
			<div class="player-container">
				<div class="map-header">
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
				<div class="map-aside">
					<div>A</div>
					<div>B</div>
					<div>C</div>
					<div>D</div>
					<div>E</div>
					<div>F</div>
					<div>G</div>
					<div>H</div>
					<div>I</div>
					<div>J</div>
				</div>
				<div class="play-card" id="player-grid"></div>
			</div>
		</section>
		<aside class="enemy-details">
			<div class="title-container">
				<h3>Ship Yard</h3>
			</div>
			<div class="ship-container" id="ship-container">
				<div class="carrier" id="ship"></div>
				<div class="battleship" id="ship"></div>
				<div class="destroyer" id="ship"></div>
				<div class="submarine" id="ship"></div>
				<div class="patrol" id="ship"></div>
			</div>
			<div class="ship-yard-controls-container">
				<div class="launch-coordinates-display">
					<p>Ship Direction: <span>Horizontal</span></p>
				</div>
			</div>
		</aside>
	</main>
</body>`,
	};

	return {
		startingElements,
		placeShipElements,
		userInputs,
		btns,
		display,
		placeShipHTMLIndex,
	};
})();

module.exports = HTML;

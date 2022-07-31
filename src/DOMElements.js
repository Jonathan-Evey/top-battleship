const HTML = (function () {
	const PERMANENT = {
		HTMLBODY: document.body,
	};

	const startingElements = {
		form: document.getElementById("start-game-form"),
		inputUserOne: document.getElementById("user-name"),
		inputUserTwo: document.getElementById("user-two-name"),
		startGameBtn: document.getElementById("start-game"),
	};

	const placeShipElements = () => {
		return (placeShipHTML = {
			header: document.getElementById("header-title"),

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

	const gamePlayElements = () => {
		return (gamePlayHTML = {
			playerGrid: document.getElementById("player-grid"),
			enemyGrid: document.getElementById("enemy-grid"),

			fireBtn: document.getElementById("fire-btn"),
			launchCoordinates: document.getElementById("coordinates-display"),

			dialog: document.getElementById("dialog"),
			dialogTitle: document.getElementById("pass-turn-title"),
			startTurnBtn: document.getElementById("start-turn-btn"),
		});
	};

	const HTMLTemplates = {
		placeShipHTMLIndex: `<header class="game-play-header">
			<div class="header-container">
				<div class="header-title-container">
					<h1 id="header-title"></h1>
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
		</main>`,
		gamePlayHTMLIndex: `<header class="game-play-header">
		<div class="header-container">
			<div class="header-title-container">
				<h1>Mission Control</h1>
			</div>
			<div class="launch-controls-container">
				<div class="launch-coordinates-display">
					<p>
						Launch Missile:
						<span id="coordinates-display"></span>
					</p>
				</div>
				<button class="btn" id="fire-btn">FIRE</button>
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
				<h3>Enemy Info</h3>
			</div>

			<div class="enemy-container">
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
				<div class="enemy-card" id="enemy-grid"></div>
			</div>
			<div class="ship-container" id="enemy-ship-container">
				<div class="carrier" id="ship"></div>
				<div class="battleship" id="ship"></div>
				<div class="destroyer" id="ship"></div>
				<div class="submarine" id="ship"></div>
				<div class="patrol" id="ship"></div>
			</div>
		</aside>
		
		</main>
		<dialog id="dialog">
	</dialog>`,
		showOutcomeHTML: `<div class="pass-turn-conatiner">
		<div class="pass-turn-card">
			<h4 id="pass-turn-title"></h4>
		</div>
	</div>`,
		passTurnHTML: `<div class="pass-turn-conatiner">
	<div class="pass-turn-card">
		<h4 id="pass-turn-title"></h4>
		<p>Click continue to start your turn</p>

		<button id="start-turn-btn">Continue</button>
	</div>
</div>`,
	};

	return {
		PERMANENT,
		startingElements,
		placeShipElements,
		gamePlayElements,
		HTMLTemplates,
	};
})();

module.exports = HTML;

import _ from "lodash";
import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";
import HTML from "./DOMElements";

let playerOne = Gameboard();
let playerTwo = Gameboard();

let currentPlayer;
let enemyPlayer;

function renderPlayfield() {
	currentPlayer = playerOne;
	enemyPlayer = playerTwo;
	currentPlayer.playGrid.forEach((cell) => {
		let cellDiv = document.createElement("div");
		cellDiv.classList.add("cell");
		cellDiv.innerText = cell;
		HTML.main.playerGrid.appendChild(cellDiv);
	});
	enemyPlayer.playGrid.forEach((cell) => {
		let cellDiv = document.createElement("div");
		if (enemyPlayer.shotsMissed.includes(cell) === true) {
			cellDiv.classList.add("miss");
		}
		if (enemyPlayer.shotsHit.includes(cell) === true) {
			cellDiv.classList.add("hit");
		}
		HTML.main.enemyGrid.appendChild(cellDiv);
	});
}

function startGame() {}

playerOne.init();
playerTwo.init();

renderPlayfield();

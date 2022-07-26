import _ from "lodash";
import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";
import HTML from "./DOMElements";

let playerOne = {
	details: Player(false),
	board: Gameboard(),
};
let playerTwo = {
	details: Player(false),
	board: Gameboard(),
};

let currentPlayer;
let enemyPlayer;

function renderPlayfield() {
	currentPlayer.board.playGrid.forEach((cell) => {
		let cellDiv = document.createElement("div");
		cellDiv.classList.add("cell");
		cellDiv.innerText = cell;
		HTML.main.playerGrid.appendChild(cellDiv);
	});
	enemyPlayer.board.playGrid.forEach((cell) => {
		let cellDiv = document.createElement("div");
		if (enemyPlayer.board.shotsMissed.includes(cell) === true) {
			cellDiv.classList.add("miss");
		}
		if (enemyPlayer.board.shotsHit.includes(cell) === true) {
			cellDiv.classList.add("hit");
		}
		HTML.main.enemyGrid.appendChild(cellDiv);
	});
}

function startGame() {
	playerOne.board.init();
	playerTwo.board.init();
	currentPlayer = playerOne;
	enemyPlayer = playerTwo;
	renderPlayfield();
}

startGame();

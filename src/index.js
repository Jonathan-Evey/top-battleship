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
		cellDiv.classList.add("cell");
		if (enemyPlayer.board.shotsMissed.includes(cell) === true) {
			cellDiv.classList.add("miss");
		}
		if (enemyPlayer.board.shotsHit.includes(cell) === true) {
			cellDiv.classList.add("hit");
		}
		cellDiv.innerText = cell;
		HTML.main.enemyGrid.appendChild(cellDiv);
	});
}

function startGame() {
	playerOne.board.init();
	playerTwo.board.init();
	currentPlayer = playerOne;
	enemyPlayer = playerTwo;
	renderPlayfield();
	creatListeners();
}

/// Set event listers on Enemy info Grid the when selected will
/// update the launch missile display with the selected coordinates
function creatListeners() {
	HTML.main.enemyGrid.addEventListener("click", (e) => {
		if (e.target.classList.contains("cell")) {
			updateLaunchDisplay(e);
			removeSelectedCell();
			updateSelectedCell(e);
		}
	});
	HTML.btns.fireBtn.addEventListener("click", () => {
		checkForCoordinates();
	});
}
function updateLaunchDisplay(e) {
	HTML.display.launchCoordinates.innerText = e.target.innerText;
}
function updateSelectedCell(e) {
	e.target.classList.add("selected");
}
function removeSelectedCell() {
	HTML.main.enemyGrid.childNodes.forEach((child) => {
		child.classList.remove("selected");
	});
}

function checkForCoordinates() {
	if (HTML.display.launchCoordinates.innerText === "") {
		return console.log("select a cell");
	} else {
		console.log("fire!");
		let coordinates = HTML.display.launchCoordinates.innerText;
		enemyPlayer.board.receiveAttack(coordinates);
	}
}

startGame();

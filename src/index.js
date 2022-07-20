import _ from "lodash";
import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";
import HTML from "./DOMElements";

let playerOne = Gameboard();
let playerTwo = Gameboard();

let currentPlayer;

function render() {
	currentPlayer = playerOne;
	currentPlayer.playGrid.forEach((cell) => {
		let cellDiv = document.createElement("div");
		cellDiv.classList.add("cell");
		cellDiv.innerText = cell;
		HTML.main.playerGrid.appendChild(cellDiv);
	});
}

function startGame() {}

playerOne.init();
playerTwo.init();

render();

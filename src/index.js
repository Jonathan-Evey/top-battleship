import _ from "lodash";
import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";
import HTML, { ships } from "./DOMElements";
const shipKeys = [
	{
		name: "carrier",
		size: 5,
	},
	{
		name: "battleship",
		size: 4,
	},
	{
		name: "destroyer",
		size: 3,
	},
	{
		name: "submarine",
		size: 3,
	},
	{
		name: "patrol",
		size: 2,
	},
];

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

function renderPlayfield(player) {
	if (player === currentPlayer) {
		currentPlayer.board.playGrid.forEach((cell) => {
			let cellDiv = document.createElement("div");
			cellDiv.classList.add("cell");
			if (currentPlayer.board.shotsMissed.includes(cell) === true) {
				cellDiv.classList.add("miss");
			}
			if (currentPlayer.board.shotsHit.includes(cell) === true) {
				cellDiv.classList.add("hit");
			}
			cellDiv.innerText = cell;
			HTML.main.playerGrid.appendChild(cellDiv);
		});
	}
	if (player === enemyPlayer) {
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
}

function startGame() {
	playerTwo.board.init();
	enemyPlayer = playerTwo;
	renderPlayfield();
	creatListeners();
}

/// Set event listers on Enemy info Grid the when selected will
/// update the launch missile display with the selected coordinates
function creatListeners() {
	HTML.main.enemyGrid.addEventListener("click", (e) => {
		if (
			e.target.classList.contains("hit") ||
			e.target.classList.contains("miss")
		) {
			return console.log("cannot select");
		}
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
		HTML.display.launchCoordinates.innerText = "";
		enemyPlayer.board.receiveAttack(coordinates);
		switchPlayerTurn();
	}
}

function switchPlayerTurn() {
	clearElements(HTML.main.playerGrid);
	clearElements(HTML.main.enemyGrid);
	if (currentPlayer === playerOne) {
		currentPlayer = playerTwo;
		enemyPlayer = playerOne;
		renderPlayfield();
		return;
	}
	if (currentPlayer === playerTwo) {
		currentPlayer = playerOne;
		enemyPlayer = playerTwo;
		renderPlayfield();
		return;
	}
}

function clearElements(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

let selectedShip;

function startPlacments() {
	playerOne.board.init();
	currentPlayer = playerOne;
	renderPlayfield(currentPlayer);
	shipPlacmentEventListeners();
}

function shipPlacmentEventListeners() {
	HTML.ships.shipContainer.addEventListener("click", (e) => {
		if (e.target.id === "ship") {
			removeSelectedClass();
			console.log(e.target.classList.value);
			selectedShip = e.target.classList.value;
			e.target.classList.add("selected");
			addPlaceSelectedShipEvent();
		}
	});
	HTML.main.playerGrid.childNodes.forEach((child) => {
		if (child.classList.contains("cell")) {
			child.addEventListener("mouseenter", (e) => {
				console.log(selectedShip);
				e.target.classList.add(selectedShip);
			});
			child.addEventListener("mouseleave", (e) => {
				e.target.classList.remove(selectedShip);
			});
		}
	});
}

function addPlaceSelectedShipEvent() {
	HTML.main.playerGrid.childNodes.forEach((child) => {
		if (child.classList.contains("cell")) {
			child.addEventListener("click", (e) => {
				e.target.classList.add(selectedShip);
				let placeShip = shipKeys.find(
					(ship) => ship.name === selectedShip
				);
				console.log(placeShip);
				placeShip = Ship(placeShip);
				console.log(placeShip);
				let coordinates = e.target.innerText;
				currentPlayer.board.place(coordinates, placeShip, "horizontal");
				removePlaceSelectedShipEvent();
			});
		}
	});
}

function removePlaceSelectedShipEvent() {
	HTML.main.playerGrid.childNodes.forEach((child) => {
		if (child.classList.contains("cell")) {
			child.removeEventListener("click", () => {});
		}
	});
}

function removeSelectedClass() {
	HTML.ships.shipContainer.childNodes.forEach((child) => {
		if (child.id === "ship") {
			child.classList.remove("selected");
		}
	});
}

startPlacments();

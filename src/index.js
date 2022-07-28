import _ from "lodash";
import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";
import HTML, { ships } from "./DOMElements";

let playerName;
function init() {
	HTML.userInputs.form.addEventListener("submit", (e) => {
		e.preventDefault();
	});
	HTML.btns.startGame.addEventListener("click", () => {
		playerName = HTML.userInputs.input.value;
		clearElements(HTML.startingElements.HTMLBODY);
		renderShipPlacementHTML();
		initPlayers();
		startPlacments(playerOne);
	});
}

function renderShipPlacementHTML() {
	HTML.startingElements.HTMLBODY.innerHTML =
		HTML.placeShipHTMLIndex.HTMLTemplate;
}

let gamePlayHTML;

function renderGamePlayHTML() {
	HTML.startingElements.HTMLBODY.innerHTML =
		HTML.gamePlayHTMLIndex.HTMLTemplate;
	gamePlayHTML = HTML.gamePlayElements();
}

let playerOne;
let playerTwo;
function initPlayers() {
	playerOne = {
		details: Player(false, playerName),
		board: Gameboard(),
	};
	console.log(playerOne);
	playerTwo = {
		details: Player(false),
		board: Gameboard(),
	};
	console.log(playerTwo);
}

let placeShipHTML;

let currentPlayer;
let enemyPlayer;

function startPlacments(playerData) {
	placeShipHTML = HTML.placeShipElements();
	console.log(placeShipHTML);
	playerData.board.init();
	currentPlayer = playerData;
	renderShipPlacementGrid();
	shipSelectEventListener();
}

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

function renderShipPlacementGrid() {
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
		placeShipHTML.playerGrid.appendChild(cellDiv);
	});
}

function renderCurrentPlayerBoard() {
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
		gamePlayHTML.playerGrid.appendChild(cellDiv);
	});
}

function renderEnemyPlayerBoard() {
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
		gamePlayHTML.enemyGrid.appendChild(cellDiv);
	});
}

function startGame() {
	currentPlayer = playerOne;
	enemyPlayer = playerTwo;
	renderCurrentPlayerBoard();
	renderEnemyPlayerBoard();
	creatListeners();
}

/// Set event listers on Enemy info Grid the when selected will
/// update the launch missile display with the selected coordinates
function creatListeners() {
	gamePlayHTML.enemyGrid.addEventListener("click", (e) => {
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
	gamePlayHTML.fireBtn.addEventListener("click", () => {
		checkForCoordinates();
	});
}
function updateLaunchDisplay(e) {
	gamePlayHTML.launchCoordinates.innerText = e.target.innerText;
}
function updateSelectedCell(e) {
	e.target.classList.add("selected");
}
function removeSelectedCell() {
	gamePlayHTML.enemyGrid.childNodes.forEach((child) => {
		child.classList.remove("selected");
	});
}

function checkForCoordinates() {
	if (gamePlayHTML.launchCoordinates.innerText === "") {
		return console.log("select a cell");
	} else {
		console.log("fire!");
		let coordinates = gamePlayHTML.launchCoordinates.innerText;
		gamePlayHTML.launchCoordinates.innerText = "";
		enemyPlayer.board.receiveAttack(coordinates);
		switchPlayerTurn();
	}
}

function switchPlayerTurn() {
	clearElements(gamePlayHTML.playerGrid);
	clearElements(gamePlayHTML.enemyGrid);
	if (currentPlayer === playerOne) {
		currentPlayer = playerTwo;
		enemyPlayer = playerOne;
		renderCurrentPlayerBoard();
		renderEnemyPlayerBoard();
		return;
	}
	if (currentPlayer === playerTwo) {
		currentPlayer = playerOne;
		enemyPlayer = playerTwo;
		renderCurrentPlayerBoard();
		renderEnemyPlayerBoard();
		return;
	}
}

function clearElements(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

let selectedShip;

function shipSelectEventListener() {
	placeShipHTML.shipContainer.removeEventListener("click", shipPicked);
	placeShipHTML.shipContainer.addEventListener("click", shipPicked);
}

let shipNode;
function shipPicked(e) {
	if (
		e.target.id === "ship" &&
		e.target.classList.contains("placed") !== true
	) {
		shipNode = e.target;
		removeSelectedClass();
		console.log(e.target.classList.value);
		selectedShip = e.target.classList.value;
		e.target.classList.add("selected");
		gridEventListeners();
	}
}

let direction = "horizontal";

function gridEventListeners() {
	if (direction === "horizontal") {
		horizontalEvents();
	}
	if (direction === "vertical") {
	}
}

function horizontalEvents() {
	let placeShip = shipKeys.find((ship) => ship.name === selectedShip);
	console.log(placeShip.size);
	let count;
	count = 0;
	placeShipHTML.playerGrid.childNodes.forEach((child) => {
		if (child.classList.contains("cell")) {
			if (count < 10 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else if (count >= 10 && count < 20 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else if (count >= 20 && count < 30 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else if (count >= 30 && count < 40 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else if (count >= 40 && count < 50 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else if (count >= 50 && count < 60 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else if (count >= 60 && count < 70 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else if (count >= 70 && count < 80 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else if (count >= 80 && count < 90 - placeShip.size + 1) {
				addMouseEnterEvent(child);
				addMouseLeaveEvent(child);
				addGridClickEventsListeners(child);
			} else {
				if (count >= 90 && count < 100 - placeShip.size + 1) {
					addMouseEnterEvent(child);
					addMouseLeaveEvent(child);
					addGridClickEventsListeners(child);
				}
			}
			count++;
		}
	});
}

function addGridClickEventsListeners(element) {
	element.addEventListener("click", placeShip);
}

function removeGridClickEventsListeners() {
	placeShipHTML.playerGrid.childNodes.forEach((child) => {
		if (child.classList.contains("cell")) {
			child.removeEventListener("click", placeShip);
		}
	});
}

function placeShip(e) {
	removeAllMouseEvenets();
	removeGridClickEventsListeners();
	shipNode.classList.add("placed");
	shipNode.classList.remove("selected");
	e.target.classList.add(selectedShip);
	let placeShip = shipKeys.find((ship) => ship.name === selectedShip);
	console.log(placeShip);
	placeShip = Ship(placeShip);
	console.log(placeShip);
	let coordinates = e.target.innerText;
	currentPlayer.board.place(coordinates, placeShip, direction);
	checkForGameStart();
}

function addShipClass(e) {
	e.target.classList.add(selectedShip);
}
function removeShipClass(e) {
	e.target.classList.remove(selectedShip);
}
function addMouseEnterEvent(element) {
	element.addEventListener("mouseenter", addShipClass);
}
function addMouseLeaveEvent(element) {
	element.addEventListener("mouseleave", removeShipClass);
}

function removeAllMouseEvenets() {
	placeShipHTML.playerGrid.childNodes.forEach((child) => {
		if (child.classList.contains("cell")) {
			child.removeEventListener("mouseleave", removeShipClass);
			child.removeEventListener("mouseenter", addShipClass);
		}
	});
}

function removeSelectedClass() {
	placeShipHTML.shipContainer.childNodes.forEach((child) => {
		if (child.id === "ship") {
			child.classList.remove("selected");
		}
	});
}

function checkForGameStart() {
	if (
		currentPlayer.board.isAllShipsPlaced() === true &&
		currentPlayer === playerOne
	) {
		clearElements(HTML.startingElements.HTMLBODY);
		renderShipPlacementHTML();
		startPlacments(playerTwo);
	} else if (
		currentPlayer.board.isAllShipsPlaced() === true &&
		currentPlayer === playerTwo
	) {
		clearElements(HTML.startingElements.HTMLBODY);
		renderGamePlayHTML();
		startGame();
	} else {
		return;
	}
}

init();

const Ship = require("./ship");

describe("test Ship construction and functions", () => {
	let testSubmarine;
	beforeEach(() => {
		testSubmarine = Ship(3);
	});
	it("Ship.length will store the length value of each ship", () => {
		expect(testSubmarine.length).toBe(3);
	});
	it("Ship.hits should start as an empty array", () => {
		expect(testSubmarine.hits).toEqual([]);
	});
});

describe("testing all outcomes of Ship.isSunk() on ship length 3", () => {
	let testSubmarine;
	beforeEach(() => {
		testSubmarine = Ship(3);
	});
	it("Ship.isSunk hit value === [] - toBe false", () => {
		expect(testSubmarine.isSunk()).toBe(false);
	});
	it("Ship.isSunk hit value === ['1'] - toBe false", () => {
		testSubmarine.hit("1");
		expect(testSubmarine.isSunk()).toBe(false);
	});
	it("Ship.isSunk hit value === ['1','2'] - toBe false", () => {
		testSubmarine.hit("1");
		testSubmarine.hit("2");
		expect(testSubmarine.isSunk()).toBe(false);
	});
	it("Ship.isSunk hit value === ['1','2','3'] - toBe true", () => {
		testSubmarine.hit("1");
		testSubmarine.hit("2");
		testSubmarine.hit("3");
		expect(testSubmarine.isSunk()).toBe(true);
	});
});

const Gameboard = require("./gameboard");

describe("test Gameboard construction and functions", () => {
	let TestPlayer;
	beforeEach(() => {
		TestPlayer = Gameboard();
		TestPlayer.init();
	});
	it("TestPlayer.gameGrid.length should be 100 (10X10 grid size for classic game)", () => {
		expect(TestPlayer.playGrid.length).toBe(100);
	});
	it("TestPlayer.gameGrid[0] should be 'A: 1')", () => {
		expect(TestPlayer.playGrid[0]).toBe("A: 1");
	});
	it("TestPlayer.gameGrid[99] should be 'J: 10')", () => {
		expect(TestPlayer.playGrid[99]).toBe("J: 10");
	});
});

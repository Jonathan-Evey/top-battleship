const Ship = require("./ship");

describe("test Ship construction and functions", () => {
	let testSubmarine;
	beforeEach(() => {
		testSubmarine = Ship(3);
	});
	it("is the created ship an object?", () => {
		expect(testSubmarine && typeof testSubmarine === "object").toBe(true);
	});
	it("does the ship have a length?", () => {
		expect(testSubmarine.length).toBe(3);
	});
	it("does the ship have a hit variable to store hits", () => {
		expect(testSubmarine.hits).toEqual([]);
	});
	it("when hit() is called on the ship it will store the hit vlaue on the ship", () => {
		testSubmarine.hit("A: 1");
		expect(testSubmarine.hits).toEqual(["A: 1"]);
	});
	it("when isSunk() and ship hits is === ship length ture", () => {
		testSubmarine.hit("A: 1");
		testSubmarine.hit("A: 2");
		testSubmarine.hit("A: 3");
		expect(testSubmarine.isSunk()).toBe(true);
	});
});

const Gameboard = require("./gameboard");

describe("test Gameboard construction and functions", () => {
	it("gameboard shoud be a 10X10 grid with A to J and 1 - 10", () => {
		expect(Gameboard.init()).tobe;
	});
});

// Create Gameboard factory.

// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

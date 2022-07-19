const Gameboard = () => {
	const playGrid = [];

	const init = () => {
		for (let i = 0; i < 100; i++) {
			if (i < 10) {
				playGrid.push(`A: ${i + 1}`);
			} else if (i < 20) {
				playGrid.push(`B: ${i - 9}`);
			} else if (i < 30) {
				playGrid.push(`C: ${i - 19}`);
			} else if (i < 40) {
				playGrid.push(`D: ${i - 29}`);
			} else if (i < 50) {
				playGrid.push(`E: ${i - 39}`);
			} else if (i < 60) {
				playGrid.push(`F: ${i - 49}`);
			} else if (i < 70) {
				playGrid.push(`G: ${i - 59}`);
			} else if (i < 80) {
				playGrid.push(`H: ${i - 69}`);
			} else if (i < 90) {
				playGrid.push(`I: ${i - 79}`);
			} else {
				playGrid.push(`J: ${i - 89}`);
			}
		}
		return;
	};

	return {
		playGrid,
		init,
	};
};

module.exports = Gameboard;

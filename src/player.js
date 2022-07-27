const Player = (computer, playerInput) => {
	const isComputer = computer;
	const name = playerInput;
	const launchMissile = (coordinates) => {
		if (isComputer === true) {
			return console.log("PC Makes pisk");
		}
		if (isComputer === false) {
			return console.log("select and fire");
		}
	};

	return {
		name,
		launchMissile,
	};
};

module.exports = Player;

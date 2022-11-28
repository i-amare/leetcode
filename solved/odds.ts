let runs = 100000;
let result = {};
let numConsecutive = 0;

function generateRoll(numDice: number = 1) {
	let roll: number[] = [];
	for (let i = 0; i < numDice; i++) {
		roll.push(Math.floor(Math.random() * 6) + 1);
	}
	return roll;
}

function checkConsecutive(roll: number[]) {
	// sorts roll
	for (let i = 0; i < roll.length - 1; i++) {
		for (let j = i + 1; j < roll.length; j++) {
			if (roll[i] > roll[j]) {
				let temp = roll[i];
				roll[i] = roll[j];
				roll[j] = temp;
			}
		}
	}

	for (let i = 0; i < roll.length - 1; i++) {
		if (!(roll[i + 1] - roll[i] == 1)) {
			return false;
		}
	}
	console.log(roll);
	return true;
}

for (let i = 0; i < runs; i++) {
	if (checkConsecutive(generateRoll(3))) {
		numConsecutive++;
	}
}

console.log((numConsecutive / runs) * 100);

let runs = 1000000;
let result = {};
let numConsecutive = 0;


function checkConsecutive() {

	let roll: number[] = [];
	for (let i = 0; i < 3; i++) {
		roll.push(Math.floor(Math.random() * 6) + 1);
	}
	
	let max = Math.max(roll[0], Math.max(roll[1], roll[2]));
	let min = Math.min(roll[0], Math.min(roll[1], roll[2]));

	if (max - min != 2) return false;
	if (roll[0] == roll[1] || roll[0] == roll[2] || roll[1] == roll[2])
		return false;

	console.log(roll);
	return true;
}

for (let i = 0; i < runs; i++) {
	if (checkConsecutive()) {
		numConsecutive++;
	}
}

console.log((numConsecutive / runs) * 100);

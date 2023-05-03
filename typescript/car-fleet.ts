function carFleet(target: number, position: number[], speed: number[]): number {
	// {position: number, time: number}
	const arrivalTimes = new Map<number, number>();

	for (let i = 0; i < position.length; i++) {
		const pos = position[i];
		const s = speed[i];

		const arrival = (target - pos) / s;

		arrivalTimes.set(pos, arrival);
	}

	const sortedCars = [...arrivalTimes.entries()].sort((a, b) => {
		return b[0] - a[0];
	});

	let slowest = -Infinity;
	let fleets = 0;
	for (const car of sortedCars) {
		const t = car[1];

		if (t > slowest) {
			slowest = t;
			fleets++;
		}
	}

	return fleets;
}

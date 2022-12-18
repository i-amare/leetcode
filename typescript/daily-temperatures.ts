function dailyTemperatures(temperatures: number[]): number[] {
	const ans = new Array<number>();

	for (let i = 0; i < temperatures.length; i++) {
		let hotterTemp = false;
		const currTemp = temperatures[i];

		for (let j = i + 1; j < temperatures.length; j++) {
			const nextTemp = temperatures[j];

			if (nextTemp > currTemp) {
				ans.push(j - i);
				hotterTemp = true;
				break;
			}
		}

		if (!hotterTemp) ans.push(0);
	}
	return ans;
}

function dailyTemperatures(temperatures: number[]): number[] {
	const ans = new Array<number>();
	let stack = new Array<number[]>();

	for (let i = 0; i < temperatures.length; i++) {
		const currTemp = temperatures[i];
		let prevTemp = stack.length ? stack[stack.length - 1][0] : Infinity;

		while (currTemp > prevTemp) {
			const top = stack.pop();
			ans[top[1]] = i - top[1];
			prevTemp = stack.length ? stack[stack.length - 1][0] : Infinity;
		}

		stack.push([currTemp, i]);
	}

	while (stack.length) {
		const top = stack.pop();
		ans[top[1]] = 0;
	}

	return ans;
}

function dailyTemperatures(temperatures: number[]): number[] {
	const ans = new Array<number>();
	const stack = new Array<number>();

	for (let i = 0; i < temperatures.length; i++) {
		const temp = temperatures[i];

		while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
			const top = stack.pop();
			ans[top] = i - top;
		}

		stack.push(i);
	}

	while (stack.length) {
		const top = stack.pop();
		ans[top] = 0;
	}

	return ans;
}

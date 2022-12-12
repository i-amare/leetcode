function climbStairs(n: number): number {
	if (n == 0) return 0;
	if (n == 1) return 1;
	if (n == 2) return 2;

	let stepBeforePrev = 1;
	let prevStep = 2;
	let numWays = 0;

	for (let i = 0; i < n - 2; i++) {
		numWays = stepBeforePrev + prevStep;
		stepBeforePrev = prevStep;
		prevStep = numWays;
	}

	return numWays;
}
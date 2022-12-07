function runningSum(nums: number[]): number[] {
	let sum: number[] = [];
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		const val = nums[i];
		total += val;
		sum.push(total);
	}
	return sum;
}

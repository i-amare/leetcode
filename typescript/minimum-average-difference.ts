function minimumAverageDifference(nums: number[]): number {
	let sumFirst = nums[0],
		sumLast = 0;
	for (let i = 1; i < nums.length; i++) {
		sumLast += nums[i];
	}
	let minDiff = Math.abs(sumFirst - Math.floor(sumLast / (nums.length - 1)));
	let minDiffIdx = 0;

	for (let i = 1; i < nums.length; i++) {
		sumFirst += nums[i];
		sumLast -= nums[i];

		let avgFirst = Math.floor(sumFirst / (i + 1)) || 0;
		let avgLast = Math.floor(sumLast / (nums.length - i - 1)) || 0;

		let currDiff = Math.abs(avgFirst - avgLast);
		if (currDiff < minDiff) {
			minDiff = currDiff;
			minDiffIdx = i;
		}
	}

	return minDiffIdx;
}


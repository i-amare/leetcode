function containsDuplicate(nums: number[]): boolean {
	let freq = new Map<string, number>();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		freq[num] = (freq[num] + 1) | 1;
		if (freq[num] >= 2) return true;
	}

	return false;
}

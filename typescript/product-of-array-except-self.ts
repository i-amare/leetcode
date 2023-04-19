function productExceptSelf(nums: number[]): number[] {
	const prefix = new Array<number>(),
		suffix = new Array<number>();

	let result = 1;
	for (let i = 0; i < nums.length; i++) {
		result *= nums[i];
		prefix[i] = result;
	}

	result = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result *= nums[i];
		suffix[i] = result;
	}

	const ans = new Array<number>();
	for (let i = 0; i < nums.length; i++) {
		const p = prefix[i - 1] == undefined ? 1 : prefix[i - 1];
		const s = suffix[i + 1] == undefined ? 1 : suffix[i + 1];
		ans.push(p * s);
	}

	return ans;
}

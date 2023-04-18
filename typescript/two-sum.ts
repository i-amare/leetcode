function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const supp = target - num;

		if (map[supp] != undefined) return [i, map[supp]];

		map[num] = i;
	}
	return [-1];
}

function threeSum(nums: number[]): number[][] {
	const solutions: number[][] = new Array();

	nums = nums.sort();

	for (let i = 0; i < nums.length; i++) {
		const prevNum = i > 0 ? nums[i - 1] : -Infinity;
		const num = nums[i];

		if (num == prevNum) continue;

		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			const sum = num + nums[left] + nums[right];
			console.log(i);
			if (sum == 0) {
				solutions.push([nums[i], nums[left], nums[right]]);
				left++;
				while (nums[l] == nums[l - 1] && l < r) {
					left += 1;
				}
			} else if (sum > 0) {
				right--;
			} else if (sum < 0) {
				left++;
			}
		}
	}

	return solutions;
}

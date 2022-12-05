function createTargetArray(nums: number[], index: number[]): number[] {
	let target: number[] = new Array<number>();

	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		let idx = index[i];
		target = [...target.slice(0, idx), num, ...target.slice(idx)]
	}
	return target;
}


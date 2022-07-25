function searchRange(nums: number[], target: number): number[] {
	let startIdx = -1,
		endIdx = -1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == target) {
			startIdx = i;
			break;
		}
	}
	if (startIdx < 0) return [startIdx, endIdx];
	for (let i = startIdx; i < nums.length; i++) {
		if (nums[i + 1] != target) {
			endIdx = i;
			break;
		} 
	}
	return [startIdx, endIdx];
}

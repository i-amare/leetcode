function maxArea(height: number[]): number {
	let left = 0,
		right = height.length;
	let maxArea = 0;
	
	while (left < right) {
		const area = Math.min(height[left], height[right]) * (left - right);
		maxArea = Math.max(maxArea, area);

		if (height[right] < height[left]) {
			right--;
		} else {
			left++;
		}
	}

	return maxArea;
}

function longestConsecutive(nums: number[]): number {
	const set = new Set<number>();

	for (const num of nums) {
		set.add(num);
	}

	let longestSet = 0;
	for (const num of nums) {
		if (set.has(num - 1)) continue;

		let setLength = 1;
		let currNum = num;
		while (set.has(currNum + 1)) {
			setLength++;
			currNum++;
		}

		longestSet = Math.max(setLength, longestSet);
	}

	return longestSet;
}

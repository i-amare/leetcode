function topKFrequent(nums: number[], k: number): number[] {
	const freqMap = new Map<number, number>();

	for (const num of nums) {
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	}

	const freqMapArr = [...freqMap.entries()].sort((a: number[], b: number[]) => {
		return b[1] - a[1];
	});

	const out: number[] = [];
	for (let i = 0; i < k; i++) {
		out.push(freqMapArr[i][0]);
	}
	return out;
}
function sumOfUnique(nums: number[]): number {
	let unique: any = {};
	for (const i of nums) {
		unique[i] = (unique[i] || 0) + 1;
	}
	let sum = 0;
	for (const key in unique) {
		if (unique[key] === 1) sum += parseInt(key);
	}
	return sum;
}

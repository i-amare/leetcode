function singleNumber(nums: number[]): number {
	// Store numbers and the frequency
	let vals: any = {}
	for (const i of nums) {
		vals[i] = (vals[i] || 0) + 1;
	}
	
	// Return the number with a frequency of 1
	const out = Object.keys(vals).find((key: any) => vals[key] == 1) || "-1";
	return parseInt(out);
};
function frequencySort(s: string): string {
	let output = "";

	let freqCounter = new Map<string, number>();

	for (let i = 0; i < s.length; i++) {
		freqCounter.set(s.charAt(i), (freqCounter.get(s.charAt(i)) || 0) + 1);
	}

	let sortedCounter = [...freqCounter.entries()].sort(
		(a: [string, number], b: [string, number]) => {
			return b[1] - a[1];
		}
	);

	sortedCounter.forEach((entry: [string, number]) => {
		for (let i = 0; i < entry[1]; i++) {
			output += entry[0];
		}
	});

	return output;
}

function closeStrings(word1: string, word2: string): boolean {
	let freq1 = new Array<number>(26),
		freq2 = new Array<number>(26);
	let set1 = new Set<string>(),
		set2 = new Set<string>();

	for (let i = 0; i < word1.length; i++) {
		const charIdx = word1.charCodeAt(i) - "a".charCodeAt(0);
		freq1[charIdx] = (freq1[charIdx] + 1) | 0;
		set1.add(word1.charAt(i));
	}

	for (let i = 0; i < word2.length; i++) {
		const charIdx = word2.charCodeAt(i) - "a".charCodeAt(0);
		freq2[charIdx] = (freq2[charIdx] + 1) | 0;
		set2.add(word2.charAt(i));
	}

	console.log(freq1, set1);
	console.log(freq2, set2);

	if (freq1.sort().toString() !== freq2.sort().toString()) {
		return false;
	}

	if (
		[...set1.keys()].sort().toString() !== [...set2.keys()].sort().toString()
	) {
		return false;
	}

	return true;
}

console.log(closeStrings("aaa", "abaaaa"));

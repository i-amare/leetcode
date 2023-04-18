function isAnagram(s: string, t: string): boolean {
	const freq1 = new Map<string, number>();
	const freq2 = new Map<string, number>();

	let anagram = true;

	for (let i = 0; i < s.length || i < t.length; i++) {
		const l1 = s.charAt(i);
		const l2 = t.charAt(i);

		freq1[l1] = (freq1[l1] + 1) | 1;
		freq2[l2] = (freq2[l2] + 1) | 1;
	}

	if (Object.keys(freq1).length != Object.keys(freq2).length) anagram = false;

	[...Object.entries(freq1)].forEach((e: [string, number]) => {
		if (freq2[e[0]] != e[1]) anagram = false;
	});

	return anagram;
}

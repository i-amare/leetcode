function isAnagram(s: string, t: string): boolean {
	const freq1 = new Map<string, number>();
	const freq2 = new Map<string, number>();

	for (let i = 0; i < s.length && i < t.length; i++) {
			const l1 = s.charAt(i);
			const l2 = t.charAt(i);

			freq1[l1] = (freq1[l1] + 1) | 1;
			freq2[l2] = (freq2[l2] + 1) | 1;
	}

	freq1.keys

	return true
};
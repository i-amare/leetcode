/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
	const freq1 = new Map<string, number>();
	const subFreq = new Map<string, number>();

	for (let i = 0; i < s1.length; i++) {
		freq1.set(s1.charAt(i), (freq1.get(s1.charAt(i)) || 0) + 1);
		subFreq.set(s2.charAt(i), (subFreq.get(s2.charAt(i)) || 0) + 1);
	}

	let [l, r] = [0, s1.length - 1];
	while (r < s2.length) {
		let isPermutation = true;

		freq1.forEach((val, key) => {
			if (subFreq.get(key) != val) isPermutation = false;
		});

		if (isPermutation) return true;
		else {
			subFreq.set(s2.charAt(l), (subFreq.get(s2.charAt(l)) || 1) - 1);
			subFreq.set(s2.charAt(r + 1), (subFreq.get(s2.charAt(r + 1)) || 0) + 1);
			r++;
			l++;
		}
	}

	return false;
}
// @lc code=end

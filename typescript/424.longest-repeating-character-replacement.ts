/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
	let [l, r, max] = [0, 1, 0];
	const freq = new Map<string, number>();

	const incFreq = (c: string) => freq.set(c, (freq.get(c) || 0) + 1);
	const decFreq = (c: string) => freq.set(c, (freq.get(c) || 1) - 1);
	const findMaxFreq = () => {
		let maxFreq = 0;
		freq.forEach((val: number) => (maxFreq = Math.max(maxFreq, val)));
		return maxFreq;
	};

	incFreq(s.charAt(l));
	incFreq(s.charAt(r));

	// Remove chars until substring is valid
	while (r < s.length) {
		while (r - l + 1 - findMaxFreq() > k) {
			decFreq(s.charAt(l));
			l++;
		}

		max = Math.max(max, r - l + 1);
		
		r++;
		incFreq(s.charAt(r));
	}

	return max;
}
// @lc code=end

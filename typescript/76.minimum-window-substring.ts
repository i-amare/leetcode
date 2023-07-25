/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
function minWindow(s: string, t: string): string {
	let res = "";
  let len = Infinity;
	const freqT = new Map<string, number>();
	const currFreq = new Map<string, number>();

	for (let i = 0; i < t.length; i++) {
		freqT.set(t.charAt(i), (freqT.get(t.charAt(i)) || 0) + 1);
		currFreq.set(s.charAt(i), (currFreq.get(s.charAt(i)) || 0) + 1);
	}

	const isSubstring = () => {
		let isSubstring = true;
		freqT.forEach((val, key) => {
			if ((currFreq.get(key) || 0) < val) isSubstring = false;
		});
		return isSubstring;
	};

	let [l, r] = [0, t.length - 1];
	while (r < s.length) {
		while (isSubstring()) {
			if (r - l + 1 < len) {
				res = s.substring(l,  r + 1);
        len = res.length;
			}
			currFreq.set(s.charAt(l), (currFreq.get(s.charAt(l)) || 1) - 1);
			l++;
		}
		r++;
		currFreq.set(s.charAt(r), (currFreq.get(s.charAt(r)) || 0) + 1);
	}

	return res;
}

// @lc code=end

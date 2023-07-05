/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
	let longest = 0,
		l = 0,
		r = 0;

	let set = new Set<string>();
	while (r < s.length) {
		if (set.has(s.charAt(r))) {
			longest = Math.max(longest, r - l);
			while (set.has(s.charAt(r))) {
				set.delete(s.charAt(l));
				l++;
			}
		}
		set.add(s.charAt(r));
		r++;
	}
	longest = Math.max(longest, r - l);

	return longest;
}
// @lc code=end

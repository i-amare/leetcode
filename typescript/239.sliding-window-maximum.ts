/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
	const queue = new Array<number>(); // stores *indices*
	const res = new Array<number>();

	for (let i = 0; i < nums.length; i++) {
		// Remove all smaller nums from queue
		while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
			queue.pop();
		}
		queue.push(i);

		// Remove first element if it is outside of window
		if (queue[0] == i - k) {
			queue.shift();
		}

		// Append the left most element to result
		if (i < k - 1) continue;
		res.push(nums[queue[0]]);
	}

	return res;
}
// @lc code=end

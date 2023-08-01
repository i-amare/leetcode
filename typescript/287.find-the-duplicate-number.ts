/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
	let [slow, fast] = [0, 0];
	let foundIntersection = false;

	while (!foundIntersection) {
		slow = nums[slow];
		fast = nums[nums[fast]];
		foundIntersection = slow == fast;
	}

	let slow2 = 0;
	while (true) {
		slow = nums[slow];
		slow2 = nums[slow2];
		if (slow == slow2) return slow;
	}
}
// @lc code=end

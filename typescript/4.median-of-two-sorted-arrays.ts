/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	// Make nums 1 the smaller of the two rrays;
	if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

	// Calculate size of partitions
	const total = nums1.length + nums2.length;
	const half = Math.floor(total / 2);

	// Run binary search on nums1
	let [l, r] = [0, nums1.length - 1];
	while (true) {
		// The middle index of both the arrays (end of left partitions on the respective arrays)
		const mid1 = Math.floor((l + r) / 2);
		const mid2 = half - mid1 - 2;

		// Getting the end values of the partions
		const nums1Left = mid1 >= 0 ? nums1[mid1] : -Infinity;
		const nums1Right = mid1 + 1 < nums1.length ? nums1[mid1 + 1] : Infinity;
		const nums2Left = mid2 >= 0 ? nums2[mid2] : -Infinity;
		const nums2Right = mid2 + 1 < nums2.length ? nums2[mid2 + 1] : Infinity;

		// Partition found
		if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
			if (total % 2 == 0) {
				// If num is even
				return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
			}
			// If num is odd
			return Math.min(nums1Right, nums2Right);
		} else if (nums1Left > nums2Right) {
			r = mid1 - 1;
		} else {
			l = mid1 + 1;
		}
	}
}
// @lc code=end

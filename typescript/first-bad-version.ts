/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = function (isBadVersion: any) {
	//@ts-ignore: leetcode API handles badVersion API calls
	return function (n: number): number {
		let left = 0;
		let right = n;

		while (left < right) {
			const mid = Math.floor((left + right) / 2);
			if (isBadVersion(mid)) {
				right = mid;
			} else {
				left = mid;
			}
			if (right - left <= 1) return isBadVersion(left) ? left : right;
		}
	};
};

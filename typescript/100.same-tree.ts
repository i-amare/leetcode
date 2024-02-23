/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (p == null && q == null) return true;
	if (p == null || q == null) return false;

	return (function search(p: TreeNode | null, q: TreeNode | null) {
		if (p == null && q == null) return true;
		if (p?.val != q?.val) return false;

		if (!search(p?.left, q?.left)) return false;
		if (!search(p?.right, q?.right)) return false;

		return true;
	})(q, p);
}
// @lc code=end

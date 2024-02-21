/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

function isBalanced(root: TreeNode | null): boolean {
	if (!root) return true;
	let res = true;

	(function search(root: TreeNode | null) {
		if (!root) return -1;

		const left = search(root.left);
		const right = search(root.right);

		if (Math.abs(left - right) > 1) res = false;

		const height = Math.max(left, right) + 1;
		return height;
	})(root);

	return res;
}
// @lc code=end

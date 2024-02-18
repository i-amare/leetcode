/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
	let res = 0;

	(function search(root: TreeNode | null) {
		if (!root) return -1;
		const left = search(root.left);
		const right = search(root.right);

		res = Math.max(res, left + right + 2);

		return 1 + Math.max(left, right);
	})(root);

	return res;
}
// @lc code=end

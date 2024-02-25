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
	let maxDiameter = 0;

	(function search(root: TreeNode | null) {
		if (!root) return -1;
		const left = search(root.left);
		const right = search(root.right);

		const diameter = left + right + 2;
		maxDiameter = Math.max(maxDiameter, diameter);

		const height = Math.max(left, right) + 1;
		return height;
	})(root);

	return maxDiameter;
}
// @lc code=end

/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null): number {
	let maxDepth = 0;

	(function depthSearch(root: TreeNode | null, depth: number) {
		if (!root) return;
		maxDepth = Math.max(maxDepth, depth);
		if (root.left) depthSearch(root.left, depth + 1);
		if (root.right) depthSearch(root.right, depth + 1);
	})(root, 1);

	return maxDepth;
}
// @lc code=end

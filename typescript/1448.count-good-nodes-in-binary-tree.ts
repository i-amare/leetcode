/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
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

function goodNodes(root: TreeNode | null): number {
	if (!root) return 0;
	let goodNodes = 0;
	(function loop(curr: TreeNode, max: number) {
		if (!curr) return;

		const currVal = curr.val;
		if (currVal >= max) goodNodes++;

		if (curr.left) loop(curr.left, Math.max(currVal, max));
		if (curr.right) loop(curr.right, Math.max(currVal, max));
	})(root, root.val);
}
// @lc code=end

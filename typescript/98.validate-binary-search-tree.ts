/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode): boolean {
	let res = true;

	function loop(curr: TreeNode, min: number, max: number) {
		if (curr.val <= min || curr.val >= max) res = false;
		if (curr.left) loop(curr.left, min, curr.val);
		if (curr.right) loop(curr.right, curr.val, max);
	}

	if (root.left) loop(root.left, -Infinity, root.val);
	if (root.right) loop(root.right, root.val, Infinity);

	return res;
};
// @lc code=end

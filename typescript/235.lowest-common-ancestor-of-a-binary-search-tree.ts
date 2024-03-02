/*
 * @lc app=leetcode id=235 lang=typescript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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

function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode,
	q: TreeNode
): TreeNode | null {
	while (true) {
		if (root.val < Math.min(p.val, q.val)) {
			root = root.right;
		} else if (root.val > Math.max(p.val, q.val)) {
			root = root.left;
		} else {
			return root;
		}
	}
}
// @lc code=end

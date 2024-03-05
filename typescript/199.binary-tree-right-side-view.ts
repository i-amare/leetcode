/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
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

function rightSideView(root: TreeNode | null): number[] {
	const que = [root];
	const res: number[] = [];

	while (que.length) {
		const lvl = que.splice(0, que.length);

		for (const node of lvl) {
			if (node?.left) que.push(node.left);
			if (node?.right) que.push(node.right);
		}

		const r = lvl[lvl.length - 1];
		if (r != null && r != undefined) res.push(r.val);
	}

	return res;
}
// @lc code=end

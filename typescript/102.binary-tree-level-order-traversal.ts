/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
	const que: Array<TreeNode | null> = [root];
	const res: number[][] = [];

	while (que.length) {
		const pop = que.splice(0, que.length);

		const lvlArr: number[] = [];
		for (const node of pop) {
			if (!node) continue;
			que.push(node.left, node.right);
			lvlArr.push(node.val);
		}
		res.push(lvlArr);
	}
    res.pop()

	return res;
}
// @lc code=end

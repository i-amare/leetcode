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

function maxProduct(root: TreeNode | null): number {
	let subtrees = [];
	let max = 0;

	const dfs = (node: TreeNode) => {
			if (!node) return 0;
			if (!node.left && !node.right) return node.val;
			const sumL = dfs(node.left), sumR = dfs(node.right);
			subtrees.push(sumL, sumR);
			return sumL+sumR+node.val;
	}
	
	const totalSum = dfs(root);

	for (const subtree of subtrees) {
			max = Math.max(max, subtree * (totalSum - subtree));
	}

	return max % (Math.pow(10,9)+7);
};
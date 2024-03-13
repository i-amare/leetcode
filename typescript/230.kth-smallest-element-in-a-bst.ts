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

function kthSmallest(root: TreeNode, k: number): number {
	return (function traverse(curr: TreeNode | null) {
		if (!curr) return;
        
		const left = traverse(curr.left);
		if (left != undefined) return left; 

		k -= 1;
		if (k == 0) return curr.val;

		const right = traverse(curr.right);
		if (right != undefined) return right;
	})(root);
}

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

// TS
function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity;

  const traverse = (node: TreeNode | null): number => {
    if (!node) return 0;
    const left = Math.max(0, traverse(node.left));
    const right = Math.max(0, traverse(node.right));
    res = Math.max(res, node.val + left + right);
    return node.val + Math.max(left, right);
  };

  traverse(root);
  return res;
}
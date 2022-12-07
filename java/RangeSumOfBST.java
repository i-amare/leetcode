package java;
class Solution {
	int sum = 0;

	public int rangeSumBST(TreeNode root, int low, int high) {
		if (root.left != null) rangeSumBST(root.left, low, high);
		if (root.right != null) rangeSumBST(root.right, low, high);
		if (root.val >= low && root.val <= high) sum += root.val;
		return sum;
	}

}
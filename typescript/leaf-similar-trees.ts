function leafSimilar(root1: TreeNode, root2: TreeNode): boolean {
	return getSequence(root1).toString() == getSequence(root2).toString();

	function getSequence(root: TreeNode): number[] {
		if(!(root.left || root.right)) return [root.val];

		let arr: number[] = [];
		if (root.left) arr = [...arr, ...getSequence(root.left)];
		if (root.right) arr = [...arr, ...getSequence(root.right)];
		return arr;
	}
}

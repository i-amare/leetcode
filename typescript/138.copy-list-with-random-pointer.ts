/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
// class Node {
// 	val: number;
// 	next: Node | null;
// 	random: Node | null;
// 	constructor(val?: number, next?: Node, random?: Node) {
// 		this.val = val === undefined ? 0 : val;
// 		this.next = next === undefined ? null : next;
// 		this.random = random === undefined ? null : random;
// 	}
// }

function copyRandomList(head: Node | null): Node | null {
	const listMap = new Map<Node, Node>();

	let ptr = head;
	while (ptr) {
		let copy = new Node(ptr.val);
		listMap[ptr] = copy;
		ptr = ptr.next;
	}

	ptr = head;
	while (ptr) {
		let copy = listMap[ptr];
		copy.next = listMap[ptr.next];
		copy.random = listMap[ptr.random];
		ptr = ptr.next;
	}

	return listMap[head];
}
// @lc code=end

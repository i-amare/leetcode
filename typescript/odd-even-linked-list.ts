// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function oddEvenList(head: ListNode | null): ListNode | null {
	let count = 0;
	const oddHead = new ListNode();
	let temp = oddHead;
	while (head) {
		count++;
		if (count % 2) {
			// Odd
			temp.next = new ListNode(head.val);
			temp = temp.next;
			head.next = head.next?.next || null;
		} else {
			// Even
		}
		head
	}
}

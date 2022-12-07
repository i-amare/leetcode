// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function middleNode(head: ListNode | null): ListNode | null {
	let fast = head;
	let slow = head;

	while (fast && fast.next) {
		// @ts-ignore: object will never be null as fast is always ahead of it
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * Adds two value of two linked list together
 * @param l1 The first linked list
 * @param l2 The second linked list
 * @returns A linked list containing the sum of the two lists
 */
function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let l3: ListNode = new ListNode(0);
	let temp: ListNode = l3;

	let carry = 0;
	while (l1 || l2) {
		let n1 = l1 ? l1.val : 0;
		let n2 = l2 ? l2.val : 0;
		let ans = (n1 + n2 + carry) % 10;
		carry = Math.floor((n1 + n2 + carry) / 10);

		temp.next = new ListNode(ans);
		temp = temp.next;

		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}
	if (carry) {
		temp.next = new ListNode(carry);
	}
	return l3.next;
}
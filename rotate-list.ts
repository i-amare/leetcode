// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function rotateRight(head: ListNode, k: number): ListNode | null {
	if (head === null) {
		return head;
	}

	// Convert linked  list to string
	let strList: number[] = [];
	while (head !== null) {
		strList.push(head.val);
		if (head.next === null) {
			break;
		}
		head = head.next;
	}

	// Reorder values in string
	k = k % strList.length;
	for (k; k >= 0; k--) {
		// @ts-ignore
		strList.unshift(strList.pop());
	}

	// Convert string bcak to linked list
	let linkedList = new ListNode(strList[strList.length - 1]);
	for (let i = strList.length - 2; i >= 0; i--) {
		linkedList = new ListNode(strList[i], linkedList);
	}
	return linkedList;
}

console.log(
	rotateRight(
		new ListNode(
			1,
			new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
		),
		2
	)
);

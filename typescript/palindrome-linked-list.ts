// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function isPalindrome(head: ListNode): boolean {
	// Convert linked  list to string
	let strNum = '';
	while (head !== null) {
		strNum += head.val;
		if (head.next === null) {
			break;
		}
		head = head.next;
	}

	// Check if strNum is a palindrome
	for (let i = 0; i < Math.floor(strNum.length); i++) {
		if (strNum.charAt(i) !== strNum.charAt(strNum.length - 1 - i)) {
			return false;
		}
	}
	return true;
}
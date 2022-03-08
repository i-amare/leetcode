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
function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode | null {
	// Stores value of linked-list in string
	let l1String = listToString(l1);
	let l2String = listToString(l2);

	// Gets the results of adding both values
	let ans = parseInt(l1String) + parseInt(l2String) + '';

	// Converts ans to linked list
	let l3 = stringToList(ans);
	return l3;
}

/**
 * Converts linked-list to string value
 * @param linkedList A linked list representing a number
 * @returns A string representation of the number passed as a parameter
 */
function listToString(linkedList: ListNode): string {
	let list = '';
	while (linkedList != null) {
		list = linkedList.val + list;
		if (linkedList.next === null) {
			break;
		} else {
			linkedList = linkedList.next;
		}
	}
	return list;
}

// Accepts a string value representing a number ans return that value as a linked list
/**
 * Converts a string containing numeric value to a linked list containing the same value
 * @param string A string storing a numerical value
 * @returns A linked-list representing the number
 */
function stringToList(string: string): ListNode {
	let linkedList = new ListNode(parseInt(string.charAt(0)));
	for (let i = 1; i < string.length; i++) {
		linkedList = new ListNode(parseInt(string.charAt(i)), linkedList);
	}
	return linkedList;
}
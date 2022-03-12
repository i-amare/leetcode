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
	let arrL1 = listToArray(l1);
	let arrL2 = listToArray(l2);

	// Gets the results of adding both values
	let arrL3: Array<number> = [];
	let carry = 0;
	for (let i = 0; i < Math.max(arrL1.length, arrL2.length); i++) {
		let n1 = arrL1[i] | 0;
		let n2 = arrL2[i] | 0;
		let ans = (n1 + n2 + carry) % 10;
		carry = Math.floor((n1 + n2 + carry) / 10);
		arrL3.push(ans);
	}
	if (carry) {
		arrL3.push(carry);
	}

	// Converts ans to linked list
	let l3 = arraytoList(arrL3);
	return l3;
}

/**
 * Converts linked-list to number array
 * @param linkedList A linked list containing a positive numeric value
 * @returns A array containing the same numeric value
 */
function listToArray(linkedList: ListNode): Array<number> {
	let arrList: Array<number> = [];
	while (true) {
		arrList.push(linkedList.val);
		if (linkedList.next === null) {
			break;
		}
		linkedList = linkedList.next;
	}
	return arrList;
}

/**
 * Converts array to linked list
 * @param arr Array representing a numeric value
 * @returns Singly-linked list that contains the same numeric value
 */
function arraytoList(arr: Array<number>): ListNode {
	let list = new ListNode(arr[arr.length - 1]);
	for (let i = arr.length - 2; i >= 0; i--) {
		list = new ListNode(arr[i], list);
	}
	return list;
}
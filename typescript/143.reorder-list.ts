/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
	// Find middle of list
	let slow = head;
	let fast = head.next;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// Break list into two halfs
	let second = slow.next;
	slow.next = null;
	let first = head;

	// Reverse second half list
	let prev: ListNode | null = null;
	while (second) {
		let temp = second.next;
		second.next = prev;
		prev = second;
		second = temp;
	}
	second = prev;

	// Merge the two lists together
	while (second) {
		let temp1 = first.next;
		let temp2 = second.next;
		first.next = second;
		second.next = temp1;
		first = temp1;
		second = temp2;
	}
}
// @lc code=end

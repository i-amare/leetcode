/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let len = 1;
	let ptr = head.next;
	while (ptr) {
		ptr = ptr.next;
		len++;
	}

	if (len == n) {
		return head.next;
	} else if (len == 1) {
		return null;
	}

	ptr = head;
	for (let i = 0; i < len - n - 1; i++) {
		ptr = ptr.next;
	}
	ptr.next = ptr.next?.next || null;

	return head;
}
// @lc code=end

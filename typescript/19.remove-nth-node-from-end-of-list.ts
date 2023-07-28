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
  const temp = new ListNode(0, head);
  let left = temp;
	let right = head;
	for (let i = 0; i < n; i++) {
		right = right?.next;
	}

	while (right) {
		left = left.next;
		right = right.next;
	}
	left.next = left?.next?.next;

	return temp.next;
}
// @lc code=end

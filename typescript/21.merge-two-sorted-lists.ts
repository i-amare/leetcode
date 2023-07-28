/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	let res: ListNode | null = new ListNode();
	let pointer: ListNode | null = res;

	function helper(l1: ListNode | null, l2: ListNode | null) {
		if (!l1) pointer.next = l2;
		else if (!l2) pointer.next = l1;
		else if (l1.val <= l2.val) {
			pointer.next = l1;
			pointer = pointer.next;
			helper(l1.next, l2);
		} else {
			pointer.next = l2;
			pointer = pointer.next;
			helper(l2.next, l1);
		}
	}
	helper(list1, list2);

	return res.next;
}
// @lc code=end

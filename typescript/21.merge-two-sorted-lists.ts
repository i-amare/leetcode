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

	while (list1 && list2) {
		if (list1.val <= list2.val) {
			pointer.next = list1;
			list1 = list1.next;
		} else {
			pointer.next = list2;
			list2 = list2.next;
		}
		pointer = pointer.next;
	}

	if (!list1) pointer.next = list2;
	if (!list2) pointer.next = list1;

	return res.next;
}
// @lc code=end

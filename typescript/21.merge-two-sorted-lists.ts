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
	const merged = new ListNode();
	let temp = merged;

	while (list1 != null && list2 != null) {
		if (list1.val <= list2.val) {
			temp.next = list1;
			list1 = list1.next;
		} else {
			temp.next = list2;
			list2 = list2.next;
		}
		temp = temp.next;
	}

	if (list1 == null) temp.next = list2;
	if (list2 == null) temp.next = list1;

	return merged.next;
}
// @lc code=end

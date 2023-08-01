/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
	const listSet = new Set<ListNode>();

	let ptr = head;
	while (ptr) {
		if (listSet.has(ptr)) return true;
		listSet.add(ptr);
		ptr = ptr.next;
	}

	return false;
}
// @lc code=end

/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let sortedList = new ListNode();
  let ptr: ListNode | null = sortedList;

  while (true) {
    let minIdx = -1;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] == null) continue;
      if (lists[i].val < (minIdx > -1 ? lists[minIdx].val : Infinity)) minIdx = i;
    }

    if (minIdx == -1) break;

    ptr.next = lists[minIdx];
    ptr = ptr.next;
    lists[minIdx] = lists[minIdx].next;
  }

  return sortedList.next;
}
// @lc code=end

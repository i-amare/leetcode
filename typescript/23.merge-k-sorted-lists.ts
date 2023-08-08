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
  // Flatten list
  const head = new ListNode();
  let ptr = head;
  for (const list of lists) {
    if (list == null) continue;
    ptr.next = list;
    while (ptr.next) ptr = ptr.next;
  }

  // Run bubble sort
  let sorted = false
  while (!sorted) {
    sorted = true
    let prev = head;
    let curr = head.next;
    while (curr?.next) {
      if (curr.val > curr.next.val) {
        prev.next = curr.next;
        curr.next = prev.next.next;
        prev.next.next = curr;
        sorted = false
      }
      prev = curr;
      curr = curr.next
    }
  }

  return head.next;
}
// @lc code=end

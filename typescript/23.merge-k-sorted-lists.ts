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
  const mergedArray = new Array<number>();
  for (const list of lists) {
    let ptr = list;
    while (ptr) {
      mergedArray.push(ptr.val);
      ptr= ptr.next;
    }
  }

  mergedArray.sort((a, b) => a - b);

  const sortedList = new ListNode();
  let ptr = sortedList;
  for (const num of mergedArray) {
    ptr.next = new ListNode(num);
    ptr = ptr.next;
  }

  return sortedList.next;
};
// @lc code=end



```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {

        /**
         *
         * 1. 判断特殊情况, 如果链表集合中为空   那么就直接返回
         * 2. 此时进入下一步，代表在数组中至少存在1个及以上的链表
         * 3. 这个时候 调用辅助方法 mergeTwoLists 进行比较， 并依次返回排序后的链表
         *
         */
        int len = lists.length;
        if(len == 0)
            return null;

        ListNode cur = new ListNode(-Integer.MAX_VALUE);

        for (int i = 0; i < lists.length; i++) {
            ListNode sortList = mergeTwoLists(cur, lists[i]);
            cur = sortList;
        }
        return cur.next;

    }

    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(-Integer.MAX_VALUE);
        ListNode newNode = dummyHead;

        while (l1 != null && l2 != null){
            if(l1.val > l2.val){
                newNode.next = new ListNode(l2.val);
                l2 = l2.next;
            }
            else {
                newNode.next = new ListNode(l1.val);
                l1 = l1.next;
            }
            newNode = newNode.next;
        }

        newNode.next = l1 == null ? l2 : l1;
        return dummyHead.next;
    }
}
```
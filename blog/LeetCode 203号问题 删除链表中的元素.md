
### 第一种解法
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 *
 *  输入: 1->2->6->3->4->5->6, val = 6
 *  输出: 1->2->3->4->5
 */
 public static ListNode removeElements(ListNode head, int val) {

	while (head != null && head.val == val){
		ListNode delNode = head;
		head = head.next;
		delNode.next = null;
	}

	if(head == null)
		return head;

	ListNode prev = head;
	while (prev.next != null){
		if(prev.next.val == val){
			ListNode removeNode = prev.next;
			prev.next = removeNode.next;
			removeNode.next = null;
		}else {
			prev = prev.next;
		}
	}
	return head;
}

```

### 利用虚拟头结点 dummyHead 的第二种解法
```java
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummyHead = new ListNode(-1);
        dummyHead.next = head;
        
        ListNode prev = dummyHead;
        while(prev.next != null){
            if(prev.next.val == val){
                ListNode delNode = prev.next;
                prev.next = delNode.next;
                delNode.next = null;
            }
            else
                prev = prev.next;
        }
        return dummyHead.next;
    }
```
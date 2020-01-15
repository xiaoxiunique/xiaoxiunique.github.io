```java
package com.xx.atomblog.Test.DataStructure.Queue;


import com.sun.tools.internal.xjc.model.nav.EagerNClass;
import com.xx.atomblog.Test.DataStructure.LinkedList.LinkedList;

/**
 * @description: 链表队列
 * @author: xiaoxiunique
 * @date: 2018年7月26日 09:32:18
 */
public class LinkedListQueue<E> implements Queue<E> {

    private int size;
    private Node head, tail;

    public LinkedListQueue() {
        this.head = null;
        this.tail = null;
        size ++;
    }

    public int getSize() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public E getFront() {

        if (isEmpty()) {
            throw new IllegalArgumentException("queue is null");
        }
        return head.e;
    }

    public void enqueue(E e) {

        if (tail == null) {
            tail = new Node(e);
            head = tail;
        } else {
            tail.next = new Node(e);
            tail = tail.next;
        }
        size++;
    }

    public E dequeue() {

        if(isEmpty())
            throw new IllegalArgumentException("Queue is Empty");

        Node resNode = head;
        head = head.next;
        resNode.next =null;
        if(head == null)
            tail = null;

        size --;
        return resNode.e;
    }

    private class Node {
        private E e;
        private Node next;

        public Node(E e, Node next) {
            this.e = e;
            this.next = next;
        }

        public Node(E e) {
            this.e = e;
            this.next = null;
        }

        public Node() {
            this.e = null;
            this.next = null;
        }

        @Override
        public String toString() {
            return e.toString();
        }
    }

    @Override
    public String toString() {
        StringBuffer res = new StringBuffer();
        res.append("queue front ");

        Node cur = head;
        while (cur != null) {

            res.append(cur + " -> ");
            cur = cur.next;
        }
        res.append("-> NULL tail");
        return res.toString();
    }

    public static void main(String[] args) {
        LinkedListQueue<Integer> list = new LinkedListQueue<Integer>();
        for (int i = 0; i < 10; i++) {
            list.enqueue(i);
            System.out.println(list);
        }
        System.out.println(list);
    }
}

```
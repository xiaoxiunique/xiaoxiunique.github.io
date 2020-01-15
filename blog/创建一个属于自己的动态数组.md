
```java
/**
 * 创建一个属于自己的动态数组
 */
public class Array<T> {
    /**
     * 数组的长度
     */
    private int size;

    /**
     * 数组对象
     */
    private T[] data;

    /**
     * 有参构造  传入初始化数组的长度
     * @param capacity
     */
    public Array(int capacity){
        data = (T[]) new Object[capacity];
        size = 0;
    }

    /**
     * 无参构造函数
     */
    public Array(){
        this(10);
    }

    /**
     * 获取数组的长度
     * @return
     */
    public int getSize(){
        return size;
    }

    /**
     * 获取数组的容量
     * @return
     */
    public int getCapacity(){
        return data.length;
    }

    /**
     * 返回数组是否为空
     * @return
     */
    public boolean isEmpty(){
        return size == 0;
    }

    /**
     * 在指定的索引位置添加元素e
     * @param index
     * @param e
     */
    public void add(int index, T e){
        if(index < 0 || index > size)
            new IllegalAccessException("add failed index < 0 || index > size");


        if(size == data.length)
            resize(size * 2);

        for (int i = size - 1; i >= index; i --)
            data[i + 1] =  data[i];

        data[index] = e;
        size ++;
    }

    /**
     * add 不适用索引 默认添加到元素的末尾
     * @param e
     */
    public void add(T e){
        add(size, e);
    }

    /**
     * 在数组的首位添加元素
     * @param e
     */
    public void addFirst(T e){
        add(0, e);
    }

    /**
     * 在数组的末尾添加元素
     * @param e
     */
    public void addLast(T e){
        add(size, e);
    }

    /**
     * 获取索引位置的元素
     * @param index
     * @return
     */
    public T get(int index){
        if(index < 0 || index >= size){
            new IllegalArgumentException("索引超出范围");
        }
        return data[index];
    }

    /**
     * 给指定位置设置元素
     * @param index
     * @param e
     */
    public void set(int index, T e){
        if(index < 0 || index >= size){
            new IllegalArgumentException("索引超出范围");
        }
        data[index] = e;
    }

    /**
     * 判断数据库中是否有
     * @param e
     * @return
     */
    public boolean contains(T e){
        for (int i = 0; i < size; i++){
            if(e == data[i]){
                return true;
            }
        }
        return false;
    }

    /**
     * 找到指定位置元素的索引
     * @param e
     * @return
     */
    public int find(T e){
        for (int i = 0; i < size; i++) {
            if (e == data[i]) {
                return i;
            }
        }
        return -1;
    }

    /**
     * 删除指定位置元素的索引
     * @param index
     * @return
     */
    public T remove(int index) {
        if(index < 0 || index >= size){
            new IllegalArgumentException("索引超出范围");
        }
        T res = data[index];

        for (int i = index + 1; i < size; i++){
            data[i - 1] = data[i];
        }
        data[size] = null; // 通知 gc
        size --;
        if (size == data.length / 2){
            resize(data.length / 2);
        }
        return res;
    }

    /**
     * 删除数组的第一个元素
     * @return
     */
    public T removeFirst(){
        return remove(0);
    }

    /**
     * 删除掉数组的最后一个元素
     * @return
     */
    public T removeLast(){
        return remove(size - 1);
    }

    /**
     * 从数组中 删除指定的元素   只删除在数组中找到的第一个元素
     * @param e
     * @return
     */
    public void removeElement(T e){
        int i = find(e);
        if( i != -1){
            remove(i);
        }
    }

    /**
     * 动态改变数组的容量
     * @param newCapacity
     */
    private void resize(int newCapacity){
        T[] newArr = (T[]) new Object[newCapacity];
        for (int i = 0; i < size; i++) {
            newArr[i] = data[i];
        }
        data = newArr;
    }
```
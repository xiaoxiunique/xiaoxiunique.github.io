
### 题目描述

```
给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

```



### 关键点

- 存在重复元素, 返回`true`, 不存在重复元素返回`false`
- 利用`HashMap` 不存在重复key的原理, 以数据的元素为key存入`HashMap`中,查看最后`HashMap`的大小

### 图解

第一次循环

1. 取出数据中的第一个元素 `nums[0]`作为key 将字符串 `1` 作为`value`
2. 将组装好的数据传入 `map` 中 

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fze99abek0j30xb0juwf0.jpg)





第二次循环

1. 取出数据中的第一个元素 `nums[1]`作为key 将字符串 `1` 作为`value`
2. 存入map中![](https://ws1.sinaimg.cn/large/0066iHyhgy1fze9dn0jyjj30wu0jmjrx.jpg)



依次进行第三次, 第四次循环之后, 现在`HashMap` 中存在的元素

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fze9kz6w84j30xz0jt74u.jpg)

进行第五次循环

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fze9m5qpzej30xj0jm3z2.jpg)

> 在最后一次循环中, 存入`map`的元素的`key`为`3`, 此时在`map`中已经存在`key` 为`3`的元素了,所以本次存储不生效



最后对比数组和map的长度即可得出是否有重复元素

### 代码

```java
public boolean containsDuplicate(int[] nums) {
    Map<Object, Object> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        map.put(nums[i], "1");
    }
    return map.size() != nums.length;
}
```



### 
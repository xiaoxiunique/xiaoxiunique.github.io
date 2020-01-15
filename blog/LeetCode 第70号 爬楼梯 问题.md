
## 题目描述
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意**：给定 n 是一个正整数。

示例 1：
```java

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```
示例 2：
```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

## 解题思路
> 1. 采用求解斐波那契数列 的方法, 直接采用递归的方法

``` java
public int climbStairs(int n) {
    if (n == 1 || n == 2) {
        return n;
    }
    
    return climbStairs(n - 2) + climbStairs(n - 1);
}
```
运行一看, 提示**超出时间限制**, 这样采用递归的方式, 会导致递归特别深, 后算解除的数据也会非常的大
>2. 缓存计算结果, 避免重复计算

细心观察可以发现, 在递归求解的时候, 存在着大量的重复计算, 比如 `c(9) = c(8) + c(7)` 和 `c(10) = c(9) + c(8)` , 在这个过程中, 我们就计算了两次`c(8)`, 这样就导致了大量的重复计算, 这时我们可以采用的长度为n的数组(`int[] arr = new int[n]`), 单独记录`c(n)`的值, 这样在再次计算的时候, 我们只需要从数组中取出即可, 代码如下

```java
class Solution {
    // 用来记录计算结果的数组
    private int[] arr;

    // 将数组初始化, 并 进入递归
    public int climbStairs (int n) {
        arr = new int[n];
        for (int i = 0 ; i < n ; i ++) {
            arr[i] = -1;   
        }
        return generateClimbStairs(n);
    }
    
    // 递归计算
    public int generateClimbStairs(int n) {
        if (n == 1 || n == 2) {
            return n;
        }
        
        if(arr[n] == -1) {
            return generateClimbStairs(n - 1) + generateClimbStairs(n - 2);
        }
        
        return arr[n];
    }
}
```
再次提交, 还是得到了超出时间限制

再次推到得到正确答案
```java
    public int climbStairs(int n) {
        int[] arr = new int[n + 1];
        for (int i = 0 ; i < n ; i++) {
            arr[i] = -1;
        }
        arr[0] = 1; 
        arr[1] = 1;
        
        for (int i = 2 ; i <= n ; i ++) {
            arr[i] = arr[i - 2] + arr[i - 1];
        }
        
        return arr[n];
    }
```


#### **0x01** 数组 栈操作  `push`, `pop`
栈是一种 `LIFO（Last-In-First-Out，后进先出）`的数据结构，也就是最新添加的项最早被移除。而栈中项的插入（叫做推入）和移除（叫做弹出），只发生在一个位置——栈的顶部
```js
// 数组模拟栈  FILO
var arr = [1, 2, 3, 4, 5];

// 像数组中添加元素
arr.push(6, 7); // 1,2,3,4,5,6,7

// 从队首删除元素
arr.pop(); //1,2,3,4,5,6
```

#### **0x02** 数组队列操作 `push` `shift`
栈数据结构的访问规则是 `LIFO（后进先出）`，而队列数据结构的访问规则是`FIFO（First-In-First-Out，
先进先出）`。队列在列表的末端添加项，从列表的前端移除项

```js
var arr = [1, 2, 3, 4, 5];

arr.push(6, 7); // 1,2,3,4,5,6,7

arr.shift(); //2,3,4,5,6,7
```

#### **0x03** `unshift` 从数组头部添加元素
 `unshift()` 与 `shift()` 的用途相反：
它能在数组前端添加任意个项并返回新数组的长度

```js
var arr = [1, 2, 3, 4, 5];

arr.unshift(7, 8); // 7,8,1,2,3,4,5
```


#### **0x04** 重排序方法 `sort`, `reverse`

```js
var arr = [1, 2, 3, 4, 5, 8, 3];

var newarr = arr.sort(compare); // 1,2,3,3,4,5,8

function compare(x, y) {
    if (x > y) {
        return 1;
    } else {
        return -1;
    }
}
```

#### **0x05** 数组操作方法 `concat` `slice`
`slice()` ，它能够基于当前数组中的一或多个项创建一个新数组。 `slice()` 方法可以
接受一或两个参数，即要返回项的起始和结束位置

```js
// concat

var arr = [1, 2, 3, 4, 5, 8, 3];

var newarr = arr.concat(10, 11); // 1,2,3,4,5,8,3,10,11

// slice

var arr = [1, 2, 3, 4, 5, 8, 3];

var arr1 = arr.slice(0, 3); // 1, 2, 3

var arr2 = arr.slice(3, -1);// 4, 5, 6

```
#### **0x06** `splice` 方法, 删除, 插入, 替换

**删除**

可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。
例如， `splice(0,2)` 会删除数组中的前两项
```js
var arr = [1, 2, 3, 4, 5, 8, 3];

arr.splice(0, 2); // 3,4,5,8,3
```

**插入**

可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、0（要删除的项数）
和要插入的项。如果要插入多个项，可以再传入第四、第五，以至任意多个项。例如，
`splice(2,0,"red","green")` 会从当前数组的位置 2 开始插入字符串 `"red"` 和 `"green"` 

```js
var arr = [1, 1, 1, 1];

arr.splice(2, 0, 2, 2); // 1,1,2,2,1,1
```

**替换**

可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起
始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，
`splice (2,1,"red","green")` 会删除当前数组位置 2 的项，然后再从位置 2 开始插入字符串
`"red"` 和 `"green"` 。
```js
var arr = [1, 1, 1, 1];

arr.splice(0, 2, 2, 2); // 2,2,1,1
```


#### **0x07** 数组位置方法  `indexOf`, `lastIndexOf`
```js
var arr = [1, 2, 3, 4, 6, 6, 7];

var indexOfArr = arr.indexOf(6); // 4

var lastIndexOfArr = arr.lastIndexOf(6); // 5
```

#### **0x08** 数组 `every` 方法
```js
var arr = [1, 2, 3, 4, 5, 6, 7];

var newArr = arr.every(function (element) {
return element > 0;
}); // true


var newArr = arr.every(function (element) {
return element > 1;
}); // false
```


#### **0x09** 数组 `filter` 方法
```js
var arr = [1, 2, 3, 4, 5, 6, 7];

var filterArr = arr.filter(function (element, index) {
return element > 3;
}); // [4, 5, 6, 7]

var filterArr = arr.filter(function (element, index) {
return element < 6;
}); // [1, 2, 3, 4, 5]
```

#### **0x0a** 数组 `foreach` 方法
```js
var names = ['xiaoming', 'xiaohong', 'zhangsan', 'lishi'];

names.forEach(function (element, index) {
    console.info(element);
});
```

#### **0x0b** 数组 `map` 方法
```js

var names = ['xiaoming', 'xiaohong', 'zhangsan', 'lishi'];

var mapArr = names.map(function (element, index) {
return element.concat(" map");
});

mapArr.forEach(function (element) {
console.info(element);
}); // ["xiaoming map", "xiaohong map", "zhangsan map", "lishi map"]

```

#### **0x0c** 数组 `some` 方法
```js
var arr = [1, 2, 3, 4, 5, 6, 7];

var someFlag = arr.some(function (element) {
    return element > 6;
});  // true;

var someFlag = arr.some(function (element) {
    return element > 7;
}); // false;

```

#### **0x0d** 数组 `reduce` 方法
```js
var arr = [1, 2, 3, 4, 5, 6, 7];

var total = arr.reduce(function (pre, cur, index, array) {
console.log('pre, cur, index, array: ', pre, cur, index, array);
    return pre + cur;
}); // 28
/**
    pre, cur, index, array: 1 2 1(7)[1, 2, 3, 4, 5, 6, 7]
    pre, cur, index, array: 3 3 2(7)[1, 2, 3, 4, 5, 6, 7]
    pre, cur, index, array: 6 4 3(7)[1, 2, 3, 4, 5, 6, 7]
    pre, cur, index, array: 10 5 4(7)[1, 2, 3, 4, 5, 6, 7]
    pre, cur, index, array: 15 6 5(7)[1, 2, 3, 4, 5, 6, 7]
    pre, cur, index, array: 21 7 6(7)[1, 2, 3, 4, 5, 6, 7]
*/
```










### 0x01 什么是闭包

当函数可以记住并访问所在的词法作用域时，就产生了**闭包**，即使函数是在当前词法作用域之外执行。

```js
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz = foo();
baz(); // 输出: 2
```

### 0x02 利用闭包实现备用函数

```js
// 备忘函数
function memorize(fn) {
  var cache = {};

  return function() {
    var args = Array.prototype.slice.call(arguments);
    var key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn.apply(fn, args));
  };
}

var adder = memorize(add);
console.log("adder(1): ", adder(1));
```

### 0x03 利用闭包实现 函数柯里化 `currying`

```js
function currying(fn) {
  // 获取得到所有参数
  var rest1 = Array.prototype.slice.call(arguments); // [f, "atom.hu"]
  // 去除方法名
  rest1.shift();

  return function() {
    var rest2 = Array.prototype.slice.call(arguments); // ['10', '咸的']
    return fn.apply(null, rest1.concat(rest2));
  };
}

// 接上面
function sayHello(name, age, fruit) {
  console.log(console.log(`我叫 ${name},我 ${age} 岁了, 我喜欢吃 ${fruit}`));
}

var currying = currying(sayHello, "atom.hu");
var curryingShowMsg = currying("10", "咸的"); // 我叫 atom.hu,我 10 岁了, 我喜欢吃 咸的
```

### 0x04 页面调试小技巧

添加书签

```js
javascript: (function() {
  var elements = document.body.getElementsByTagName("*");
  var items = [];
  for (var i = 0; i < elements.length; i++) {
    if (
      elements[i].innerHTML.indexOf("html * { outline: 1px solid red }") != -1
    ) {
      items.push(elements[i]);
    }
  }
  if (items.length > 0) {
    for (var i = 0; i < items.length; i++) {
      items[i].innerHTML = "";
    }
  } else {
    document.body.innerHTML +=
      "<style>html * { outline: 1px solid red }</style>";
  }
})();
```

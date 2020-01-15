**async.waterfall**

**导入**
```
const async = require("async")
```
**例子**
```
async.waterfall([
    function (next) {
      console.log("fun1");
      next(null, "fun1")
    },
    function (func1, next) {
      console.info(func1);
      ctx.body = func1;
    }
])
```


**util.promisify**

将普通函数变为 `promise` 函数

**导入**
```
const { promisity } = require("util")
```

**例子**

```
var fs = require("fs");
fs.readFile("foo.json", "utf8", function(err, content){
    if(err){
        //异常情况
    }else{
        //正常情况
    }
})

var fs = require("fs");
var readFilePromise = promisify(fs.readFile, fs); //包装为 Promise 接口
readFilePromise("foo.json", "utf8").then(function(content){
    //正常情况
}).catch(function(err){
    //异常情况
})
```

**`promisity` 实现**

`es5` 实现
```js
var promisify = function promisify(fn, receiver) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      fn.apply(receiver, [].concat(args, [function (err, res) {
        return err ? reject(err) : resolve(res);
      }]));
    });
  };
};
```

`es6` 实现

```js
let promisify = (fn, receiver) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.apply(receiver, [...args, (err, res) => {
        return err ? reject(err) : resolve(res);
      }]);
    });
  };
};
```
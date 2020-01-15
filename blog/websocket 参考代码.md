
### 安装
```js
import SockJS from "sockjs-client";
import Stomp from "stompjs";
```


```js
_connection() {

    
  this._disconnect();
  // 建立连接对象
  this.socket = new SockJS(
    "http://shoptest.i3phm.com:9007/websocket-endpoint"
  ); //连接服务端提供的通信接口，连接以后才可以订阅广播消息和个人消息
  // 获取STOMP子协议的客户端对象
  this.stompClient = Stomp.over(this.socket);
  // 处理心跳
},

// 订阅消息
subscribe(fn) {
  this._connection();
  // 定义客户端的认证信息,按需求配置
  var headers = {};
  // 向服务器发起websocket连接;
  this.stompClient.connect(
    headers,
    frame => {
      fn && fn.apply(this, [this.stompClient]);
    },
    err => {
      // 连接发生错误时的处理函数
      console.log("err - > " + err);
      setTimeout(() => {
        this.subscribe(fn);
      }, 5000);
    }
  );
},
// 关闭连接
_disconnect() {
  this.stompClient && this.stompClient.disconnect();
},
```

### 使用
```
this.app.subscribe(this.subscribe);
```


```
// 订阅主题
subscribe(stompClient) {
  let client = stompClient.subscribe(
    `/userTest/${this.modalParams.equipId}/info`,
    msg => {
      // 订阅服务端提供的某个topic
      console.log(msg.body); // msg.body存放的是服务端发送给我们的信息
      this.dataList = JSON.parse(msg.body);
    }
  );
  return client;
},
```

[demo](https://juejin.im/post/5b7fd02d6fb9a01a196f6276)
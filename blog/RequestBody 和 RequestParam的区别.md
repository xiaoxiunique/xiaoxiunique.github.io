
### @RequestParam

用来处理`Content-Type`: 为 `application/x-www-form-urlencoded`编码的内容。（`Http`协议中，如果不指定`Content-Type`，则默认传递的参数就是`application/x-www-form-urlencoded`类型）

`RequestParam`可以接受简单类型的属性，也可以接受对象类型。
实质是将`Request.getParameter()` 中的`Key-Value`参数`Map`利用`Spring`的转化机制`ConversionService`配置，转化成参数接收对象或字段。

> tip

在`Content-Type: application/x-www-form-urlencoded`的请求中，
`get` 方式中`queryString`的值，和`post`方式中 `body data`的值都会被`Servlet`接受到并转化到`Request.getParameter()`参数集中，所以`@RequestParam`可以获取的到。

### @RequestBody

处理`HttpEntity`传递过来的数据，一般用来处理非`Content-Type: application/x-www-form-urlencoded`编码格式的数据。

- `GET`请求中，因为没有`HttpEntity`，所以`@RequestBody`并不适用。

- `POST`请求中，通过`HttpEntity`传递的参数，必须要在请求头中声明数据的类型`Content-Type`，`SpringMVC`通过使用`HandlerAdapter` 配置的`HttpMessageConverters`来解析`HttpEntity`中的数据，然后绑定到相应的`bean`上。

### 总结

在`GET`请求中，不能使用`@RequestBody`。

在`POST`请求，可以使用`@RequestBody`和`@RequestParam`，但是如果使用`@RequestBody`，对于参数转化的配置必须统一。

举个例子，在`SpringMVC`配置了`HttpMessageConverters`处理栈中，指定 json 转化的格式，如`Date`转成`yyyy-MM-dd`,则参数接收对象包含的字段如果是 Date 类型，就只能让客户端传递年月日的格式，不能传时分秒。因为不同的接口，它的参数可能对时间参数有不同的格式要求，所以这样做会让客户端调用同事对参数的格式有点困惑，所以说扩展性不高。

如果使用`@RequestParam`来接受参数，可以在接受参数的`model`中设置`@DateFormat`指定所需要接受时间参数的格式。

另外，使用`@RequestBody`接受的参数是不会被`Servlet`转化统一放在`request`对象的`Param`参数集中，`@RequestParam`是可以的。

综上所述，一般情况下，推荐使用`@RequestParam`注解来接受`Http`请求参数。

[原文](https://blog.csdn.net/xinluke/article/details/52710706)

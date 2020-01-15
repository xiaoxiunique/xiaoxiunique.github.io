
```java
package com.lk.truck.service.config;

import com.alibaba.fastjson.JSON;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.cache.interceptor.KeyGenerator;

import java.lang.reflect.Method;
import java.util.HashMap;

/**
 * <p>
 * TODO:
 * </p>
 *
 * @author hcg
 * @date 2019/7/26 9:40
 * @className RedisCacheKeyGenerator
 */
public class RedisCacheKeyGenerator implements KeyGenerator {

    @Override
    public Object generate(Object targetClass, Method method, Object... params) {
        HashMap<String, Object> container = new HashMap<>();
        Class<?> targetClassClass = targetClass.getClass();
        // 类地址
        container.put("class",targetClassClass.toGenericString());
        // 方法名称
        container.put("methodName",method.getName());
        // 包名称
        container.put("package",targetClassClass.getPackage());
        // 参数列表
        for (int i = 0; i < params.length; i++) {
            container.put(String.valueOf(i),params[i]);
        }
        // 转为JSON字符串
        String jsonString = JSON.toJSONString(container);
        // 做SHA256 Hash计算，得到一个SHA256摘要作为Key
        return DigestUtils.sha256Hex(jsonString);
    }
}

```

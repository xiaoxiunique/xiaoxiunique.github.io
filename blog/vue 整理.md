
### 1. 配置自动导入基础组件

```js
import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  // 其组件目录的相对路径
  "@/components",
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /lk.*\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});
```

在 `main.js` 中引入

```js
import "@/components/componentRegister";
```

现在`/lk.*\w+\.(vue|js)$/` 可以匹配的基础组件就可实现自动导入, 无需再一个个`import` 导入了

### 2. 配置自动导入方式二

::: tip

在第一方式中展现的自动导入配置的方式, 需要制定特定文件前缀, 下面的方式不需要指定, 所有的 Components 组件都可直接使用

:::

`@/components/index.js`

```js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/components', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

```

`main.js`

```js
import '@/components'
```

现在便可在 View 中使用 `文件夹-文件名` 的方式使用 , 无需引入, 提升开发效率

### 3. vue 高级组件封装 , 函数防抖和函数节流

**Throttle.js**

```js
const throttle = function(fn, wait = 50, isDebounce, ctx) {
  let timer;
  let lastCall = 0;
  return function(...params) {
    if (isDebounce) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(ctx, params);
      }, wait);
    } else {
      const now = new Date().getTime();
      if (now - lastCall < wait) return;
      lastCall = now;
      fn.apply(ctx, params);
    }
  };
};

export default {
  name: "Throttle",
  abstract: true,
  props: {
    time: Number,
    events: String,
    isDebounce: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.eventKeys = this.events.split(",");
    this.originMap = {};
    this.throttledMap = {};
  },
  render() {
    const vnode = this.$slots.default[0];
    this.eventKeys.forEach(key => {
      const target = vnode.data.on[key];
      if (target === this.originMap[key] && this.throttledMap[key]) {
        vnode.data.on[key] = this.throttledMap[key];
      } else if (target) {
        this.originMap[key] = target;
        this.throttledMap[key] = throttle(
          target,
          this.time,
          this.isDebounce,
          vnode
        );
        vnode.data.on[key] = this.throttledMap[key];
      }
    });
    return vnode;
  }
};

```

在`main.js` 中引入

```js
import Throttle from "@/common/Throttle";
Vue.component("Throttle", Throttle);
```

在`element-ui` 中使用

```html
<Throttle :time="1000" events="click">
  <el-button type="default" @click.native="handleAddItem">新增</el-button>
</Throttle>
```

### 4. 重置 data 技巧

```js
Object.assign(this.$data, this.$options.data());
```

### 5. 配置不同环境下不同的请求地址

- 创建对应环境的配置文件 `.env.dev`
- 在配置文件中填写环境名 `NODE_ENV`

**test1**

```js
NODE_ENV = "test1";
VUE_APP_TITLE = "test1";
```

**prov1**

```js
NODE_ENV = "prov1";
VUE_APP_TITLE = "prov1";
```

- 修改`package.json`文件

```json
"build-prov1": "vue-cli-service build --mode prov1",
"build-dev": "vue-cli-service build --mode test1",
```

### 6. lodash 合并数据

```js
const map2 = _.keyBy(temp, "name");

const r = _(this.dataFlow)
  .map(m => _.merge({}, m, map2[m.name]))
  .concat(_.differenceBy(temp, this.dataFlow, "name"))
  .value();
```

### 7. 限制只能输入数字

```js
this.$nextTick(() => {
  if (this.form.startValue !== null) {
    this.form.startValue = this.form.startValue.replace(/[^\d]/g, "");
  }
});

oninput = "value=value.replace(/[^\-?\d.]/g,'')";
```

### 8. VsCode 配置模板输入

```vue
{
	"vue": {
	"prefix": "vue",
	"body": [
		"<template lang=\"pug\">" ,
		"" ,
		"</template>" ,
		"" ,
		"<script>" ,
		"export default {" ,
		"  name: \"N\"," ,
		"  props: {}," ,
		"  data() {" ,
		"    return {};" ,
		"  }," ,
		"  computed: {}," ,
		"  watch: {}," ,
		"  beforeCreate() {}," ,
		"  created() {}," ,
		"  beforeMount() {}," ,
		"  mounted() {}," ,
		"  destroyed() {}," ,
		"  methods: {}" ,
		"};" ,
		"</script>" ,
		"" ,
		"<style lang=\"stylus\" scoped></style>" ,
		""
	],
	"description": "generate a vue file"}
}
```

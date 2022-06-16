# eribbit-client-pc

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 数据持久化

需要安装vuex的插件 `vuex-persistedstate`

在 `index.js` 配置插件

```js
import createPersistedState from 'vuex-persistedstate'

plugins: [
    createPersistedState({
      // 本地存储名字
      key: 'eribbit-client-pc-store',
      // 指定需要存储的模块
      paths: [
        'user', 'cart'
      ]
    })
  ]
```

## less自动注入

**解决方法：** 使用vuecli的 `style-resources-loader`，添加一个vuecli的插件

选择 `Less` 作为预处理器

在 `vue.config.js` 中配置自动注入的文件路径

```js
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
})
```

## 样式重置与公用

- 重置样式

执行 `npm i normalize.css` 安装重置样式的包，然后在 `main.js`` 导入 `normalize.css` 即可。

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

+import 'normalize.css'

createApp(App).use(store).use(router).mount('#app')
```

- 公用样式

新建文件 `src/assets/styles/common.less` 在该文件写入常用的样式，然后在 `main.js` 导入即可。

`src/assets/styles/common.less`

```less
// 重置样式
* {
  box-sizing: border-box;
 }
 
 html {
   height: 100%;
   font-size: 14px;
 }
 body {
   height: 100%;
   color: #333;
   min-width: 1240px;
   font: 1em/1.4 'Microsoft Yahei', 'PingFang SC', 'Avenir', 'Segoe UI', 'Hiragino Sans GB', 'STHeiti', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif
 }
 ...
```

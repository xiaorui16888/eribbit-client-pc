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
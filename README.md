# Echao豆瓣

[![Build Status](https://travis-ci.org/echaoo/doubanMovie_PWA.svg?branch=master)](https://travis-ci.org/echaoo/doubanMovie_PWA)

> 这是一个 pwa 项目。

### 效果图
![GIF 图片](/docs/img/preview.gif)

### 功能特点

- 可添加到主屏幕（必须是Android，且用chrome浏览器），像应用一样打开。

- 因为缓存，相比于传统的网站，有更好的性能表现。

- 有较强大的离线可用性。

### 开发注意事项

- 在配置文件中增加了isProxyOpen字段，为true时才开启proxyTable将请求转发到真实的豆瓣后端。
- 请求url全在src/config/request.js下，想在开发时请求真实的后端需要配合修改baseUrl

### npm 相关命令

``` bash
# 安装工程依赖
npm install

# 更新工程依赖
npm update

# 在 localhost:8082 上启动带有热更新机制的开发服务器
npm run dev

# 检查您的代码是否规范
npm run lint

# 构建线上生产环境产物
npm run build

# 构建线上生产环境产物并且查看构建分析报告
npm run build --report
```

### 其它信息

- 感谢Vdo应用为该项目提供思路，功能及外观设计参考。

- Lavas 工程模版基于 [vue-template](https://github.com/vuejs-templates/webpack) 模版创建。
如果想要了解具体如何玩转整个 Lavas 创建的 PWA 工程, 请查看 [vue-template 指南](http://vuejs-templates.github.io/webpack/) 和 [vue-loader 指南](http://vuejs.github.io/vue-loader)。

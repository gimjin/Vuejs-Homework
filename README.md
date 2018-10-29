# Cruise

## Homework KEY Point
* HTML & CSS => ok
* Fluid Layout => ok
* Consistently IE9+ and modern browsers => ok (iView v3 & Bootstrap v3 Supported IE8+)
* Function 1, Deleted a resource => ok
* Function 2, Add new resources => ok
* Function 3, Use resources filter => ok (Extra function)
* Responsive design => ok (Bootstrap Grid system)
* Javascript/Vue Unit Test => ok

## Development Choice
* Vuejs
* Webpack
* Babel
* Bootstrap & iView
* Vuex
* Nodejs
* jest
* @vue/test-utils

## Brief Explanation
``` bash
# install dependencies
npm install

# create the input data via text file
node data.config.js

# serve with hot reload at localhost:8080
npm run dev

# build for production
npm run build
```

## Code Description
src/main.js
* Vuex创建agentsData全局响应数组来存储
* 有agentsData数据改变方法
src/App.vue
* Bootstrap v3是MVC框架所以只用响应式布局和部分Layout
src/components/AgentList.vue
* iView Scroll组件开发Fluid Layout
* axios Promise方式读取数据，因为是本地读取所以加setTimeout方法模拟过程
* ES6 filter方法做筛选显示列表，总共有三种 All, Physical, Virtual
src/components/AgentItem.vue
* 操作Vuex.store删除和增加Resources

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

## Brief Explanation
Step 1. 安装所有node_modules (请使用cnpm或者淘宝镜像资源)
\$ npm install
Step 2. 创建假设数据文件，文件将存放在./static/json目录
\$ node data.config.js
Step 3. 运行服务访问网站，会自动打开浏览器
\$ npm run dev

## Code Description
src/main.js
* Vuex创建agentsData全局响应数组来存储加载的数据
* 有agentsData数据改变方法
src/App.vue
* Bootstrap v3是MVC框架所以只用响应式布局和部分Layout
src/components/AgentList.vue
* iView Scroll组件开发Fluid Layout
* axios Promise方式读取数据，因为是本地读取所以加setTimeout方法模拟过程
* ES6 filter方法做筛选显示列表，总共有三种 All, Physical, Virtual
src/components/AgentItem.vue
* 操作Vuex.store删除和增加Resources

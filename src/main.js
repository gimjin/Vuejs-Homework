import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Vuex)
Vue.use(iView)

// 全局数据集，可响应式修改界面已绑定数据
const store = new Vuex.Store({
  // 不要在发布环境下启用严格模式！**严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  strict: process.env.NODE_ENV !== 'production',
  state: {
    // 所有加载的数据存储到 agentsData管理
    agentsData: []
  },
  mutations: {
    // 加载request-page=n.json数据至agentsData
    loadAgentsData: function(state, agents) {
      state.agentsData = state.agentsData.concat(agents)
    },
    // 移除agent中指定resource
    removeResource: function(state, payload) {
      state.agentsData[payload.id].resources.splice(payload.index, 1)
    },
    // 批量增加指定agent的resource
    addResources: function(state, payload) {
      state.agentsData[payload.id].resources = state.agentsData[payload.id].resources.concat(payload.res)
    }
  },
  getters: {
    filterAgents: (state) => (type) => {
      if (type == 'all') {
        // 返回所有数据
        return state.agentsData
      } else {
        // 过滤数组，根据type只返回physical 或 virtual
        return state.agentsData.filter(item => item.type == type)
      }
    }
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  store // 可以在所有子组件export default{}内部用 this.$store.调用
})
